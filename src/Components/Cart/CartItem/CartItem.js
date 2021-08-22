import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [price, setPrice] = useState(parseFloat(item.price * item.qty).toFixed(1));

  const onClickPlus = (e) => {
    adjustQty(item.id, item.qty += 1);
    setPrice(parseFloat((item.price * item.qty).toFixed(3)))
  };

  const onClickMinus = (e) => {
    if(item.qty > 1) {
      adjustQty(item.id, item.qty -= 1);
      setPrice(parseFloat((item.price * item.qty).toFixed(3)))
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="text-xl py-2 flex space-between"> 
          <p>{item.title}</p>
        </div>
        <div className="text-xl py-2 flex space-between">
          <p>$ {item.price}</p>
        </div>
        <div className="text-lg py-2"> 
          <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button 
                className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={onClickMinus}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                </svg>
              </button>
              <p>{ item.qty }</p>
              <button 
                className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={onClickPlus}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end border-b-2 py-2 text-base">Item price $ {item.price} * {item.qty} = $ {price}</div>
      <div className="flex justify-end border-b-2 py-3 text-base">Item Cost: $ {price}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
