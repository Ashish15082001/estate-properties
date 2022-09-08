import React from "react";
import Card from "../card/Card";
import styles from "./Grid.module.css";

function Grid({ propertiesIds }) {
  // console.log(propertiesIds);
  return (
    <div className={styles["grid-container"]}>
      {propertiesIds.length === 0 && (
        <p className={styles["grid-container-message"]}>No Properties found</p>
      )}
      {propertiesIds.length > 0 && (
        <ul className={styles["grid"]}>
          {propertiesIds.map((propertyId) => (
            <li className={styles["grid-item"]} key={propertyId}>
              <Card propertyId={propertyId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Grid;
