import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Shopping/shopping-actions";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Product = ({ product, addToCart, loadCurrentItem }) => {
    const [successMsg, setSuccessMsg] = useState("");

    return (
        <div className="flex py-2 border-top rounded-sm justify-between items-center space-xauto">
            <Snackbar
                open={Boolean(successMsg)}
                autoHideDuration={2000}
                onClose={() => setSuccessMsg("")}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    severity="success"
                    onClose={() => {
                        setSuccessMsg("");
                    }}
                >
                    {successMsg}
                </Alert>
            </Snackbar>
            <div className="flex-auto align-baseline flex justify-between">
                <span className="flex-1 px-1">{product.title}</span>
                <span className="flex-auto px-1">$ {product.price}</span>
            </div>
            <div>
                <button
                    className="bg-blue-500 rounded p-2"
                    onClick={() => {
                        addToCart(product.id);
                        setSuccessMsg(`${product.title} added to cart`);
                    }}
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
