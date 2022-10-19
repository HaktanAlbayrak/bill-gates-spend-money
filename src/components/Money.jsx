import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "react-countup";
import { useBasket } from "../redux/basket";
import "../styles/money.scss";

const Money = () => {
  const [fix, setFix] = useState(false);

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

  const fixedMoneyOnTop = () => {
    if (window.scrollY >= 425) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    update(balance);
  }, [balance]);

  window.addEventListener("scroll", fixedMoneyOnTop);
  return (
    <div className={fix ? "money-fixed" : "money-wrapper"}>
      <div className="money-bar" ref={countUpRef} />
    </div>
  );
};

export default Money;
