import React from "react";
import styles from "./Button.module.css";

function Button({ onClick, label, type }) {
  return (
    <button className={styles["button"]} onClick={onClick} data-type={type}>
      {label}
    </button>
  );
}

export default Button;
