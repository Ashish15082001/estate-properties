import React from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import styles from "./FlexInputLabelContainer.module.css";

function FlexInputLabelContainer({ megaLabel }) {
  return (
    <div className={styles["flex-container"]}>
      <h1>{megaLabel}</h1>
      <div className={styles["input-container"]}>
        <input placeholder="Seach with Seach Bar" />
        <span>
          <ArrowDownIcon />
        </span>
      </div>
    </div>
  );
}

export default FlexInputLabelContainer;
