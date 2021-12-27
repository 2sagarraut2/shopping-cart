import React, { useState } from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const SingleItem = ({ current, addToCart }) => {

  const [successMsg, setSuccessMsg] = useState("");

  return (
    <div >
      <div>
        <Snackbar 
          open={Boolean(successMsg)}
          autoHideDuration={3000}
          onClose={() => setSuccessMsg('')}
        >
          <Alert
            elevation={6}
            variant='filled'
            severity="success"
            onClose={() => {
              setSuccessMsg('');
            }}
          >
            {successMsg}
          </Alert>
        </Snackbar>
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
