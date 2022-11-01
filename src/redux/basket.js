import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import products from "../utils/products";

const initialMoney = 100000000000;

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    initialMoney: initialMoney,
    balance: initialMoney,
    products,
  },
  reducers: {
    addBasket: (state, action) => {
      const filterProduct = state.products.find((x) => x.id === action.payload);
      filterProduct.count++;

      const newBalance = state.balance - filterProduct.productPrice;
      state.balance = newBalance;
    },
    sellBasket: (state, action) => {
      const filterProduct = state.products.find((x) => x.id === action.payload);
      filterProduct.count--;

      const newBalance = state.balance + filterProduct.productPrice;
      state.balance = newBalance;
    },
  },
});

export const useBasket = () => useSelector((state) => state.basket);

export const { addBasket, sellBasket } = basketSlice.actions;
export default basketSlice.reducer;
