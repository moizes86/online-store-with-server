import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ category, imageURL, history, match }) => (
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

export default withRouter(MenuItem);
