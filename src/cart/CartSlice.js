import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      const existingItem = state.cart.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.currentPrice;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      //payload = productId
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      //payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.currentPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      //payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.currentPrice;
        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.productId === id)?.quantity ?? 1;
