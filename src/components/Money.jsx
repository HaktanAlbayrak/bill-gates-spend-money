import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useBasket } from "../redux/basket";
import "../styles/money.scss";

const Money = () => {
  const { balance } = useBasket();

  const countUpRef = useRef(null);

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: balance,
    duration: 1,
    separator: ",",
    decimal: ".",
    prefix: "$",
  });

  useEffect(() => {
    update(balance);
  }, [balance]);

  return (
    <div className="money-wrapper">
      <div className="money-bar" ref={countUpRef} />
    </div>
  );
};

export default Money;
