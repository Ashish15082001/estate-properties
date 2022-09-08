import React from "react";
import styles from "./Button.module.css";

function Button({ onClick, label, type, disabled }) {
  return (
    <button
      className={styles["button"]}
      onClick={onClick}
      data-type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
