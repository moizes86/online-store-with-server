import React from "react";
import { withRouter } from "react-router-dom";

import "./category-item.styles.scss";

const CategoryItem = ({ category, imageURL, history, match }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}/${category}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
    <div className="content">
      <span>{category}</span>
    </div>
  </div>
);

export default withRouter(CategoryItem);
