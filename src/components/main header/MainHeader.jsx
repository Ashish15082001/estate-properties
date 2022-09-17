import React from "react";
import Button from "../button/Button";
import styles from "./MainHeader.module.css";
import { Link, useLocation } from "react-router-dom";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import { useEffect } from "react";

function MainHeader() {
  const { pathname } = useLocation();

  console.log("rendering App...");
  useEffect(() => console.log("rendered App..."));
  return (
    <header className={styles["main-header"]}>
      <div className={styles["nav-logo-container"]}>
        <p className={styles["logo"]}>ESTATERY</p>
        <ul className={styles["navigation-options"]}>
          <li className={styles["navigation-option"]}>
            <Link to={"/rent"} data-active={pathname === "/rent"}>
              Rent
            </Link>
          </li>
          <li className={styles["navigation-option"]}>
            <Link to={"/favourites"} data-active={pathname === "/favourites"}>
              Favourites
            </Link>
          </li>
          <li className={styles["navigation-option"]}>
            <Link to={"/buy"} data-active={pathname === "/buy"}>
              Buy
            </Link>
          </li>
          <li className={styles["navigation-option"]}>
            <Link to={"/sell"} data-active={pathname === "/sell"}>
              Sell
            </Link>
          </li>
          <li className={styles["navigation-option"]}>
            <Link
              to={"/manage-property"}
              data-active={pathname === "/manage-property"}
            >
              Manage Property
              <span>
                <ArrowDownIcon />
              </span>
            </Link>
          </li>
          <li className={styles["navigation-option"]}>
            <Link to={"/resources"} data-active={pathname === "/resources"}>
              Resources
              <span>
                <ArrowDownIcon />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["button-container"]}>
        <Button label="Login" type="secondary" />
        <Button label="Sign up" type="primary" />
      </div>
    </header>
  );
}

export default MainHeader;
