import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/CartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
