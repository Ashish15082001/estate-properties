import React from "react";
import styles from "./MainBody.module.css";
import Grid from "../grid/Grid";
import Filter from "../filter/Filter";
import FlexInputLabelContainer from "../flex input label container/FlexInputLabelContainer";

function MainBody({ propertiesIds, megaLabel, handleApplyFilter }) {
  return (
    <div className={styles["main-body"]}>
      <FlexInputLabelContainer megaLabel={megaLabel} />
      <Filter handleApplyFilter={handleApplyFilter} />
      <Grid propertiesIds={propertiesIds} />
    </div>
  );
}

export default MainBody;
