import React from "react";
import styles from "./PlaceHolderPage.module.css";

function PlaceHolderPage({ placeHolderText }) {
  return (
    <div className={styles["page-body"]}>
      <p>{placeHolderText}</p>
    </div>
  );
}

export default PlaceHolderPage;
