import React from "react";

// Redux
import { connect } from "react-redux";
import {
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="flex py-2 border-top rounded-sm justify-between items-center space-xauto">
      <div className="flex-auto align-baseline flex justify-between">
        <span className="flex-1 px-1">{product.title}</span>
        <span className="flex-auto px-1">$ {product.price}</span>
      </div>
      <div>
        <button
          className="bg-blue-500 rounded p-2"
          onClick={() => addToCart(product.id)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
