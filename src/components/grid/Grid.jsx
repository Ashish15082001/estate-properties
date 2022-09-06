import React from "react";
import Card from "../card/Card";
import styles from "./Grid.module.css";

function Grid({ propertiesIds }) {
  // console.log(propertiesIds);
  return (
    <div className={styles["grid-container"]}>
      <ul className={styles["grid"]}>
        {propertiesIds.map((propertyId) => (
          <li className={styles["grid-item"]} key={propertyId}>
            <Card propertyId={propertyId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grid;
