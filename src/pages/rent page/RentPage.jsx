import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MainBody from "../../components/main body/MainBody";
import { fetchPropertiesToRentThunk } from "../../store/slices/properties/fetchPropertiesToRentThunk";
import getFilteredProperties from "../../util/getFilteredProperties";

function RentPage() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.properties);
  const { propertiesToRent: filters } = useSelector(
    (state) => state.properties.filters
  );
  const { propertiesIds } = useSelector(
    (state) => state.properties.propertiesToRent
  );
  const isPropertiesToRentIdsEmpty = propertiesIds.length === 0;

  const filteredPropertiesIds = getFilteredProperties(
    filters,
    propertiesIds,
    entities
  );

  useEffect(() => {
    async function fetchPropertiesToRent() {
      const promise = await dispatch(fetchPropertiesToRentThunk());

      if (promise.error) throw new Error();
    }
    if (isPropertiesToRentIdsEmpty)
      toast.promise(fetchPropertiesToRent, {
        pending: "Fetching properties to rent.",
        success: "Successfully fetched properties to rent.",
        error: "Failed to fetch properties to rent.",
      });
  }, [dispatch, isPropertiesToRentIdsEmpty]);

  return (
    <MainBody
      propertiesIds={filteredPropertiesIds}
      megaLabel="Search properties to rent"
      filterFor="propertiesToRent"
    />
  );
}

export default RentPage;
