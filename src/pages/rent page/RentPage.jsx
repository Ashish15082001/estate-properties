import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainBody from "../../components/main body/MainBody";
import { dataStatus } from "../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "../../store/slices/properties/fetchPropertiesToRentThunk";
import LoadingPage from "../loading page/LoadingPage";

function RentPage() {
  const dispatch = useDispatch();
  const { propertiesIds, status } = useSelector(
    (state) => state.properties.propertiesToRent
  );

  useEffect(() => {
    async function fetchPropertiesToRent() {
      await dispatch(fetchPropertiesToRentThunk());
    }

    if (propertiesIds.length === 0 && status === dataStatus.idle)
      fetchPropertiesToRent();
  }, [dispatch, propertiesIds.length, status]);

  if (status === dataStatus.fetching) return <LoadingPage />;
  return <MainBody propertiesIds={propertiesIds} />;
}

export default RentPage;
