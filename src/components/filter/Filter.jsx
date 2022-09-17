import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import { filterChanged } from "../../store/slices/filters/filtersSlice";
import Button from "../button/Button";
import styles from "./Filter.module.css";

function Filter({ filterFor }) {
  const dispatch = useDispatch();
  const [isLocationMenuVisible, setIsLocationMenuVisible] = useState(false);
  const [isPriceMenuVisible, setIsPriceMenuVisible] = useState(false);
  const [isPropertyTypeMenuVisible, setIsPropertyTypeMenuVisible] =
    useState(false);
  const { location, when, propertyType, price } = useSelector(
    (state) => state.filters[filterFor]
  );

  console.log("rendering Filter...");
  useEffect(() => console.log("rendered Filter..."));

  return (
    <div className={styles["filter-container"]}>
      <ul className={styles["filter-options"]}>
        {/*^^^^^^^^^^^^^^^^^^^^^^^^ LOCATION ^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        <li
          className={styles["filter-option"]}
          data-visible={isLocationMenuVisible}
        >
          <p>Location</p>
          <h5>
            {location ? location : "Select Location"}
            <span
              onClick={() =>
                setIsLocationMenuVisible(
                  (currentVisibility) => !currentVisibility
                )
              }
            >
              <ArrowDownIcon />
            </span>
          </h5>
          <div className={styles["menu"]} data-visible={isLocationMenuVisible}>
            <ul className={styles["menu-options"]}>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "location",
                      filterValue: "New York, USA",
                    })
                  );
                }}
              >
                New York, USA
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "location",
                      filterValue: "Manitoba, Canada",
                    })
                  );
                }}
              >
                Manitoba, Canada
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "location",
                      filterValue: "Indiana, Canada",
                    })
                  );
                }}
              >
                Indiana, Canada
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "location",
                      filterValue: "Indiana, USA",
                    })
                  );
                }}
              >
                Indiana, USA
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "location",
                      filterValue: "Florida, USA",
                    })
                  );
                }}
              >
                Florida, USA
              </li>
            </ul>
          </div>
        </li>
        {/*^^^^^^^^^^^^^^^^^^^^^^^^ WHEN ^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        <li className={styles["filter-option"]}>
          <p>When</p>
          <h5>
            {when ? when : "Select Move-in Date"}
            <span>
              <CalendarIcon />
            </span>
          </h5>
        </li>
        {/*^^^^^^^^^^^^^^^^^^^^^^^^ PRICE ^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        <li className={styles["filter-option"]}>
          <p>Price</p>
          <h5>
            {price ? `${price.min} - ${price.max}` : "Select Price"}
            <span
              onClick={() =>
                setIsPriceMenuVisible((currentVisibility) => !currentVisibility)
              }
            >
              <ArrowDownIcon />
            </span>
          </h5>
          <div className={styles["menu"]} data-visible={isPriceMenuVisible}>
            <ul className={styles["menu-options"]}>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 0, max: 1000 },
                    })
                  );
                }}
              >
                $0 - $1000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 1000, max: 2000 },
                    })
                  );
                }}
              >
                $1000 - $2000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 2000, max: 3000 },
                    })
                  );
                }}
              >
                $2000 - $3000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 3000, max: 4000 },
                    })
                  );
                }}
              >
                $3000 - $4000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 4000, max: 5000 },
                    })
                  );
                }}
              >
                $4000 - $5000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 5000, max: 6000 },
                    })
                  );
                }}
              >
                $5000 - $6000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 6000, max: 7000 },
                    })
                  );
                }}
              >
                $6000 - $7000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 7000, max: 8000 },
                    })
                  );
                }}
              >
                $7000 - $8000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 8000, max: 9000 },
                    })
                  );
                }}
              >
                $8000 - $9000
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPriceMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "price",
                      filterValue: { min: 9000, max: 10000 },
                    })
                  );
                }}
              >
                $9000 - $10000
              </li>
            </ul>
          </div>
        </li>
        {/*^^^^^^^^^^^^^^^^^^^^^^^^ PROPERTY TYPE ^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        <li className={styles["filter-option"]}>
          <p>Property Type</p>
          <h5>
            {propertyType ? propertyType : "Select Prototype"}
            <span
              onClick={() =>
                setIsPropertyTypeMenuVisible(
                  (currentVisibility) => !currentVisibility
                )
              }
            >
              <ArrowDownIcon />
            </span>
          </h5>
          <div
            className={styles["menu"]}
            data-visible={isPropertyTypeMenuVisible}
          >
            <ul className={styles["menu-options"]}>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPropertyTypeMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "propertyType",
                      filterValue: "Apartment",
                    })
                  );
                }}
              >
                Apartment
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPropertyTypeMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "propertyType",
                      filterValue: "House",
                    })
                  );
                }}
              >
                House
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPropertyTypeMenuVisible(false);
                  dispatch(
                    filterChanged({
                      filterFor,
                      filter: "propertyType",
                      filterValue: "Townhouse",
                    })
                  );
                }}
              >
                Townhouse
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div>
        <Button
          label="Search"
          type="primary"

          // disabled={!location && !when && !price && !propertyType}
        />
      </div>
    </div>
  );
}

export default Filter;
