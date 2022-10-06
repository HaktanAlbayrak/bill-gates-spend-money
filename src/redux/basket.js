import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialMoney = 100000000000;

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    initialMoney: initialMoney,
    balance: initialMoney,
    basket: [],
    total: 0,
  },
  reducers: {},
});

export const useBasket = () => useSelector((state) => state.basket);

export const {} = basketSlice.actions;
export default basketSlice.reducer;
