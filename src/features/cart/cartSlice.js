import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  total:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")).filter((item) => item !== null)
          .length
      : 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems[action.payload.id - 1] = action.payload;
      state.total = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item !== null
      ).length;
    },
    removeItem(state, action) {
      state.cartItems[action.payload - 1] = null;
      state.total = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item !== null
      ).length;
    },
    clearCart(state) {
      const cart = new Array(20);
      localStorage.setItem("cart", JSON.stringify(cart));
      state.cartItems = cart;
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
