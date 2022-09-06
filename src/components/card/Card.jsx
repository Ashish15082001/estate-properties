import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaIcon from "../../icons/AreaIcon";
import BathTubIcon from "../../icons/BathTubIcon";
import BedIcon from "../../icons/BedIcon";
import StartIcon from "../../icons/StartIcon";
import { addPropertyToFavourite } from "../../store/slices/properties/propertiesSlice";
import styles from "./Card.module.css";
import AddToFavouriteIcon from "../../icons/AddToFavouriteIcon";
import FavouriteIcon from "../../icons/FavouriteIcon";

function Card({ propertyId }) {
  const {
    currentPrice,
    availableFor,
    imageUrl,
    basicInfo: { propertyName, bedRooms, bathRooms, area, address },
  } = useSelector((state) => state.properties.entities[propertyId]);
  const dispatch = useDispatch();
  const isFavourite = useSelector((state) =>
    state.properties.favouriteProperties[propertyId] ? true : false
  );
  function addToFavourite() {
    dispatch(addPropertyToFavourite({ propertyId }));
  }

  return (
    <div className={styles["card"]}>
      <div
        className={styles["card-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles["card-info-container"]}>
        <div className={styles["card-detailed-info-container"]}>
          <div className={styles["popular-tag-container"]}>
            <p>
              <span>
                <StartIcon />
              </span>
              Popular
            </p>
          </div>
          <div className={styles["card-detailed-info"]}>
            <p className={styles["price"]}>
              ${currentPrice}{" "}
              <span>{availableFor === "rent" ? "/month" : ""}</span>
            </p>
            <p className={styles["property-name"]}>{propertyName}</p>
          </div>
          <div className={styles["fav-icon-container"]}>
            <span onClick={addToFavourite}>
              {isFavourite ? <FavouriteIcon /> : <AddToFavouriteIcon />}
            </span>
          </div>
          <p className={styles["address"]}>{address}</p>
        </div>
        <div className={styles["card-short-info-container"]}>
          <ul className={styles["card-infos"]}>
            <li className={styles["card-info"]}>
              <span>
                <BedIcon />
              </span>
              <p>{bedRooms} Beds</p>
            </li>
            <li className={styles["card-info"]}>
              <span>
                <BathTubIcon />
              </span>
              <p>{bathRooms} BathRooms</p>
            </li>
            <li className={styles["card-info"]}>
              <span>
                <AreaIcon />
              </span>
              <p>
                {area} m<sup>2</sup>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
