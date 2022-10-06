import React, { useState } from "react";
import "../styles/product.scss";

const ProductItem = ({ product }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="product-item">
      <img
        src={product.image}
        alt={product.productName}
        className="product-image"
      />
      <div className="item-name">{product.productName}</div>
      <div className="item-price">${product.productPrice}</div>
      <div className="item-buttons">
        <button className="sell-button">Sell</button>
        <input pattern="\d*" type="number" value={count} className="count" />
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
};

export default ProductItem;
