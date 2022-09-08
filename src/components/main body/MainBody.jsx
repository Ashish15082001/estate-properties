import React from "react";
import styles from "./MainBody.module.css";
import Grid from "../grid/Grid";
import Filter from "../filter/Filter";
import FlexInputLabelContainer from "../flex input label container/FlexInputLabelContainer";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../store/slices/properties/propertiesSlice";
import { toast } from "react-toastify";

function MainBody({ propertiesIds, megaLabel, handleApplyFilter }) {
  const dispatch = useDispatch();

  function removeFilters() {
    toast(`Filteres have been removed.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(resetFilter());
  }

  return (
    <div className={styles["main-body"]}>
      <FlexInputLabelContainer megaLabel={megaLabel} />
      <Filter handleApplyFilter={handleApplyFilter} />
      <div className={styles["flex-container"]}>
        <p className={styles["properties-count"]}>
          Total Number of Properties :<span>{propertiesIds.length}</span>
        </p>
        <p className={styles["remove-filter"]} onClick={removeFilters}>
          Remove all filters
        </p>
      </div>
      <Grid propertiesIds={propertiesIds} />
    </div>
  );
}

export default MainBody;
