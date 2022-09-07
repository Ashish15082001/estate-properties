import React from "react";
import styles from "./MainBody.module.css";
import Grid from "../grid/Grid";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import Filter from "../filter/Filter";

function MainBody({ propertiesIds, megaLabel }) {
  return (
    <div className={styles["main-body"]}>
      <div className={styles["flex-container"]}>
        <h1>{megaLabel}</h1>
        <div className={styles["input-container"]}>
          <input placeholder="Seach with Seach Bar" />
          <span>
            <ArrowDownIcon />
          </span>
        </div>
      </div>
      <Filter />
      <Grid propertiesIds={propertiesIds} />
    </div>
  );
}

export default MainBody;
