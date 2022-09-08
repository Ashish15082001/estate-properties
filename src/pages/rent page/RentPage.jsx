import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MainBody from "../../components/main body/MainBody";
import { dataStatus } from "../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "../../store/slices/properties/fetchPropertiesToRentThunk";
import { applyFilterToPropertiesToRent } from "../../store/slices/properties/propertiesSlice";
import PlaceHolderPage from "../placeholder page/PlaceHolderPage";

function RentPage() {
  const dispatch = useDispatch();
  const { filteredPropertiesIds: propertiesIds, status } = useSelector(
    (state) => state.properties.propertiesToRent
  );
  const isPropertiesToRentIdsEmpty = useSelector(
    (state) => state.properties.propertiesToRent.propertiesIds.length === 0
  );

  function handleApplyFilter() {
    toast(`Filteres have been applied`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(applyFilterToPropertiesToRent());
  }

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

  if (status === dataStatus.fetching)
    return (
      <PlaceHolderPage
        placeHolderText={"Fetching propeties to rent. Please wait."}
      />
    );

  return (
    <MainBody
      propertiesIds={propertiesIds}
      megaLabel="Search properties to rent"
      handleApplyFilter={handleApplyFilter}
    />
  );
}

export default RentPage;
