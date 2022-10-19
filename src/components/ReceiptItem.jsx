import React from "react";
import { formatCash } from "../utils/formatMoney";
import "../styles/receipt.scss";

const ReceiptItem = ({ item }) => {
  return (
    <div className="receipt-items-info">
      <div className="receipt-item-name">{item.productName}</div>
      <div className="receipt-item-amount">x{item.count}</div>
      <div className="receipt-item-cost">
        ${formatCash(item.productPrice * item.count)}
      </div>
    </div>
  );
};

export default ReceiptItem;
