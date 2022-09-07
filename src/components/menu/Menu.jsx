import React from "react";

function Menu({ menuOptions }) {
  return (
    <u>
      {Object.keys(menuOptions).map((key) => (
        <li key={key} onClick={menuOptions[key].onClick}>
          {menuOptions[key].option}
        </li>
      ))}
    </u>
  );
}

export default Menu;
