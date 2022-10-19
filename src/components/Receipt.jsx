import React, { useEffect, useState } from "react";
import { useBasket } from "../redux/basket";
import "../styles/receipt.scss";
import { numberWithCommas } from "../utils/formatMoney";
import ReceiptItem from "./ReceiptItem";

const Receipt = () => {
  const { products } = useBasket();
  const [receiptData, setReceiptData] = useState([]);
  const [receiptTotal, setReceiptTotal] = useState(0);
  const [productTotalMoney, setProductTotalMoney] = useState(0);

  useEffect(() => {
    const filterProduct = products.filter((x) => x.count !== 0);
    setReceiptData(filterProduct);

    const total = filterProduct?.reduce((a, item) => {
      return a + item.productPrice * item.count;
    }, 0);

    setReceiptTotal(total);
  }, [products]);

  return (
    <div className="receipt-wrapper">
      <div className="receipt-headline">Your Receipt</div>
      <div className="receipt-items">
        {receiptData?.map((item) => (
          <ReceiptItem item={item} key={item.id} />
        ))}
      </div>
      <div className="receipt-total">
        <div className="receipt-total-text">TOTAL</div>
        <div className="receipt-total-money">
          {numberWithCommas(receiptTotal)}
        </div>
      </div>
    </div>
  );
};

export default Receipt;
