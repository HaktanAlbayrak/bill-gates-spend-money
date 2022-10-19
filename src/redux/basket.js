import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import products from "../utils/products";

const initialMoney = 100000000000;

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    initialMoney: initialMoney,
    balance: initialMoney,
    basket: [],
    total: 0,
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
    changeCount: (state, action) => {
      if (
        state.balance + action.payload.count * action.payload.productPrice >
        action.payload.newCount * action.payload.productPrice
      ) {
        action.payload.count = action.payload.newCount;
      } else {
        const currentBalance =
          state.balance + action.payload.count * action.payload.productPrice;
        const availableCount = currentBalance / action.payload.productPrice;
        action.payload.count = Math.floor(availableCount);
      }

      if (!state.basket.find((e) => e.id === action.payload.id)) {
        if (action.payload.count > 0) {
          state.basket = [...state.basket, action.payload];
        }
      } else {
        if (action.payload.count > 0) {
          state.basket = state.basket.map((e) => {
            if (e.id === action.payload.id) {
              e.count = action.payload.count;
            }
            return e;
          });
        } else {
          state.basket = state.basket.filter((e) => e.id !== action.payload.id);
        }
      }
    },
  },
});

export const useBasket = () => useSelector((state) => state.basket);

export const { addBasket, sellBasket, changeCount } = basketSlice.actions;
export default basketSlice.reducer;
