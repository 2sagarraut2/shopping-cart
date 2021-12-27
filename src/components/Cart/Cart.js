import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [cheeseSavings, setCheeseSavings] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;

            if (item.id === 3) {
                if (item.qty >= 3 && item.qty < 4) {
                    setCheeseSavings(item.price);
                } else if (item.qty >= 4) {
                    setCheeseSavings(item.price * 2);
                } else {
                    setCheeseSavings(0);
                }
            }
        });

        setTotalItems(items);
        setTotalPrice(parseFloat(price).toFixed(2));
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <div>
            <div className="bg-blue p-2 flex justify-center font-sans">
                <div className="rounded bg-grey-light w-80 p-2">
                    <div className="flex justify-between py-1 border-b border-gray-300">
                        <h3 className="text-4xl">Basket</h3>
                    </div>
                    <div className="text-sm mt-2">
                        <div className="bg-white p-2 rounded mt-1 border-b border-grey hover:bg-grey-lighter">
                            {cart.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    cheeseSavings={cheeseSavings}
                                />
                            ))}
                        </div>
                        <div className="text-lg">
                            <div className="flex justify-between p-2">
                                <span>Sub Total: </span>
                                <span>$ {totalPrice}</span>
                            </div>
                            <div className="flex justify-between p-2">
                                <span>Savings: </span>
                                <span>$ {cheeseSavings}</span>
                            </div>
                            <div className="flex justify-between p-2">
                                <span>Total Amount: </span>
                                <span>$ {totalPrice - cheeseSavings}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-2">
                <Link to="/">
                    <button className="font-sans bg-blue-500 focus:bg-blue-200 rounded p-2">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);
