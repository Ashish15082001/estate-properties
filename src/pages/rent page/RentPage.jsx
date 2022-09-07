import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MainBody from "../../components/main body/MainBody";
import { dataStatus } from "../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "../../store/slices/properties/fetchPropertiesToRentThunk";
import PlaceHolderPage from "../placeholder page/PlaceHolderPage";

function RentPage() {
  const dispatch = useDispatch();
  const { propertiesIds, status } = useSelector(
    (state) => state.properties.propertiesToRent
  );

  useEffect(() => {
    async function fetchPropertiesToRent() {
      const promise = await dispatch(fetchPropertiesToRentThunk());
      console.log(promise);
      if (promise.error) throw new Error();
    }

    if (propertiesIds.length === 0) {
      // fetchPropertiesToRent();
      toast.promise(fetchPropertiesToRent, {
        pending: "Fetching properties to rent.",
        success: "Successfully fetched properties to rent.",
        error: "Failed to fetch properties to rent.",
      });
    }
  }, [dispatch, propertiesIds.length]);

  if (status === dataStatus.fetching)
    return (
      <PlaceHolderPage
        placeHolderText={"Fetching propeties to rent. Please wait."}
      />
    );
  if (status === dataStatus.idle && propertiesIds.length === 0)
    return (
      <PlaceHolderPage placeHolderText={"No Properties available to rent."} />
    );

  return <MainBody propertiesIds={propertiesIds} />;
}

export default RentPage;
