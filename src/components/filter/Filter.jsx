import React from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import Button from "../button/Button";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <div className={styles["filter-container"]}>
      <ul className={styles["filter-options"]}>
        <li className={styles["filter-option"]}>
          <p>Location</p>
          <h5>New York, USA</h5>
        </li>
        <li className={styles["filter-option"]}>
          <p>When</p>
          <h5>
            Select Move-in Date{" "}
            <span>
              <CalendarIcon />
            </span>
          </h5>
        </li>
        <li className={styles["filter-option"]}>
          <p>Price</p>
          <h5>
            $500 - $2500
            <span>
              <ArrowDownIcon />
            </span>
          </h5>
        </li>
        <li className={styles["filter-option"]}>
          <p>Property Type</p>
          <h5>
            Houses
            <span>
              <ArrowDownIcon />
            </span>
          </h5>
        </li>
      </ul>
      <div>
        <Button label="Search" type="primary" />
      </div>
    </div>
  );
}

export default Filter;
