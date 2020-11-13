import React from "react";

import "./items-count-controller.styles.scss";

import { connect } from "react-redux";

const ItemsCountController = (item) => {
  return (
    <div className="items-count-controller">
      {item.title}
      <button onClick={() => null}>+</button> 000 <button>-</button>
    </div>
  );
};

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })
export default connect()(ItemsCountController);
