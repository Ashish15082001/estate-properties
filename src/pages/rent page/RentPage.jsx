import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MainBody from "../../components/main body/MainBody";
import getArePropertiesAvailableSelector from "../../selectors/getArePropertiesAvailableSelector";
import getPropertiesIdsSelector from "../../selectors/getPropertiesIdsSelector";
import { fetchPropertiesToRentThunk } from "../../store/slices/properties/fetchPropertiesToRentThunk";

function RentPage() {
  const dispatch = useDispatch();
  const propertiesIds = useSelector(
    getPropertiesIdsSelector("propertiesToRent")
  );
  const arePropertiesAvailable = useSelector(
    getArePropertiesAvailableSelector("propertiesToRent")
  );

  useEffect(() => {
    async function fetchPropertiesToRent() {
      const promise = await dispatch(fetchPropertiesToRentThunk());

      if (promise.error) throw new Error();
    }
    if (arePropertiesAvailable === false)
      toast.promise(fetchPropertiesToRent, {
        pending: "Fetching properties to rent.",
        success: "Successfully fetched properties to rent.",
        error: "Failed to fetch properties to rent.",
      });
  }, [dispatch, arePropertiesAvailable]);

  console.log("rendering rent page...");
  useEffect(() => console.log("rendered rent page..."));

  return (
    <MainBody
      propertiesIds={propertiesIds}
      megaLabel="Search properties to rent"
      filterFor="propertiesToRent"
    />
  );
}

export default RentPage;
