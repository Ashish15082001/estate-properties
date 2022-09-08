import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import {
  setFilterLocation,
  setFilterPriceRange,
  setFilterPropertyType,
} from "../../store/slices/properties/propertiesSlice";
import Button from "../button/Button";
import styles from "./Filter.module.css";

function Filter({ handleApplyFilter }) {
  const dispatch = useDispatch();
  const [isLocationMenuVisible, setIsLocationMenuVisible] = useState(false);
  const [isPriceMenuVisible, setIsPriceMenuVisible] = useState(false);
  const [isPropertyTypeMenuVisible, setIsPropertyTypeMenuVisible] =
    useState(false);
  const { location, plannedDate, propertyType, priceRange } = useSelector(
    (state) => state.properties.filter
  );

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
                  dispatch(setFilterLocation({ location: "New York, USA" }));
                }}
              >
                New York, USA
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(setFilterLocation({ location: "Manitoba, Canada" }));
                }}
              >
                Manitoba, Canada
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(setFilterLocation({ location: "Indiana, Canada" }));
                }}
              >
                Indiana, Canada
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(setFilterLocation({ location: "Indiana, USA" }));
                }}
              >
                Indiana, USA
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsLocationMenuVisible(false);
                  dispatch(setFilterLocation({ location: "Florida, USA" }));
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
            {plannedDate ? plannedDate : "Select Move-in Date"}
            <span>
              <CalendarIcon />
            </span>
          </h5>
        </li>
        {/*^^^^^^^^^^^^^^^^^^^^^^^^ PRICE ^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        <li className={styles["filter-option"]}>
          <p>Price</p>
          <h5>
            {priceRange
              ? `${priceRange.min} - ${priceRange.max}`
              : "Select Price"}
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
                    setFilterPriceRange({ priceRange: { min: 0, max: 1000 } })
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
                    setFilterPriceRange({
                      priceRange: { min: 1000, max: 2000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 2000, max: 3000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 3000, max: 4000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 4000, max: 5000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 5000, max: 6000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 6000, max: 7000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 7000, max: 8000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 8000, max: 9000 },
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
                    setFilterPriceRange({
                      priceRange: { min: 9000, max: 10000 },
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
                    setFilterPropertyType({ propertyType: "Apartment" })
                  );
                }}
              >
                Apartment
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPropertyTypeMenuVisible(false);
                  dispatch(setFilterPropertyType({ propertyType: "House" }));
                }}
              >
                House
              </li>
              <li
                className={styles["menu-option"]}
                onClick={() => {
                  setIsPropertyTypeMenuVisible(false);
                  dispatch(
                    setFilterPropertyType({ propertyType: "Townhouse" })
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
        <Button label="Search" type="primary" onClick={handleApplyFilter} />
      </div>
    </div>
  );
}

export default Filter;
