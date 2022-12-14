import React from "react";
import ProductItem from "./ProductItem";
import "../styles/product.scss";
import { useBasket } from "../redux/basket";

const Product = () => {
  const { products } = useBasket();

  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
