import React from "react";
import ProductItem from "./ProductItem";
import "../styles/product.scss";
import products from "../utils/products";

const Product = () => {
  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
