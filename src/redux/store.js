import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/carditems/cardSlice";

const store = configureStore({
  reducer: { card: cardReducer },
});

export default store;
