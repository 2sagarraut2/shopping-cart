import React from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div>
      <div className="bg-blue w-full p-8 flex justify-center font-sans">
        <div className="rounded bg-grey-light w-64 p-2">
          <div className="justify-between py-1">
            <h3 className="text-3xl">Products</h3>
          </div>
          <div>
            <div className="bg-white p-1 rounded border-b border-grey hover:bg-grey-lighter">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/cart">
        <button className="font-sans bg-blue-500 focus:bg-blue-200 rounded p-2">Go to Basket</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
