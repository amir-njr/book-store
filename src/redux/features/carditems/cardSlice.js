import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedItems: [],
  itemCounter: 0,
  totalPrice: 0,
};

const sumItems = (items) => {
  const counter = items.reduce((sum, product) => sum + product.qty, 0);
  return counter;
};
const sumPrice = (items) => {
  const price = items.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );
  return price;
};

const cardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    add(state, action) {
      state.selectedItems.push({ ...action.payload, qty: 1 });
      state.itemCounter = sumItems(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    remove(state, action) {
      const newState = state.selectedItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.selectedItems = newState;
      state.itemCounter = sumItems(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    increment(state, action) {
      const indexI = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );
      state.selectedItems[indexI].qty++;
      state.itemCounter = sumItems(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    decrement(state, action) {
      const indexD = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );
      state.selectedItems[indexD].qty--;
      state.itemCounter = sumItems(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    clean(state) {
      (state.selectedItems = []),
        (state.itemCounter = 0),
        (state.totalPrice = 0);
    },
  },
});

export const { add, remove, increment, decrement ,clean} = cardSlice.actions;
export default cardSlice.reducer;
