import React from "react";
import { useEffect } from "react";
import styles from "./FlexLabelClickableContainer.module.css";

function FlexLabelClickableContainer({ label, handleClick, clickableLabel }) {
  console.log("rendering FlexLabelClickableContainer...");
  useEffect(() => console.log("rendered FlexLabelClickableContainer..."));

  return (
    <div className={styles["flex-container"]}>
      <p className={styles["properties-count"]}>{label}</p>
      <p className={styles["remove-filter"]} onClick={handleClick}>
        {clickableLabel}
      </p>
    </div>
  );
}

export default FlexLabelClickableContainer;
