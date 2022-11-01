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
    changeBalance: (state, action) => {
      const { product, count } = action.payload;
      const findItem = state.products.find((fI) => fI.id === product.id);

      const maximumal = Math.floor(state.balance / product.productPrice);
      const maximum = count + Number(maximumal);
      findItem.count = maximum;

      let total = 0;
      state.products.forEach((cr) => {
        total += cr.count * cr.productPrice;
      });
      state.balance = state.balance - total;
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

export const { addBasket, sellBasket, changeBalance } = basketSlice.actions;
export default basketSlice.reducer;
