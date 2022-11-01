import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBasket,
  changeBalance,
  sellBasket,
  useBasket,
} from "../redux/basket";
import "../styles/product.scss";
import { numberWithCommas } from "../utils/formatMoney";

const ProductItem = ({ product }) => {
  const [disable, setDisable] = useState(true);
  const [noMoney, setNoMoney] = useState(false);
  const [count, setCount] = useState(0);

  const { balance } = useBasket();

  const dispatch = useDispatch();

  const maximumal = Math.floor(balance / product.productPrice);
  const maximum = Number(maximumal);

  const buyHandler = (id) => {
    dispatch(addBasket(id));
  };

  const sellHandler = (id) => {
    if (product.count !== 0) {
      dispatch(sellBasket(id));
    }
  };

  useEffect(() => {
    if (product.count !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    if (balance < product.productPrice) {
      setNoMoney(true);
    } else {
      setNoMoney(false);
    }
  }, [product.count, balance, count]);

  return (
    <div className="product-item" id={product.id}>
      <img
        src={product.image}
        alt={product.productName}
        className="product-image"
      />
      <div className="item-name">{product.productName}</div>
      <div className="item-price">{numberWithCommas(product.productPrice)}</div>
      <div className="item-buttons">
        <button
          className={disable ? "sell-button-disable" : "sell-button"}
          onClick={() => sellHandler(product.id)}
          disabled={disable}
        >
          Sell
        </button>
        <input
          type="number"
          value={product.count}
          className="count"
          disable={true}
        />
        <button
          className={noMoney ? "buy-button-disable" : "buy-button"}
          onClick={() => buyHandler(product.id)}
          disabled={noMoney}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
