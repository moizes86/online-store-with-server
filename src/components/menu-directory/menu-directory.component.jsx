import React from "react";

import "./menu-directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

const MenuDirectory = ({ categories }) => {
  return (
    <div className="menu-directory">
      {categories.map((el, i) => (
        <MenuItem category={el.category} imageURL={el.image} key={i} />
      ))}
    </div>
  );
};

export default MenuDirectory;
