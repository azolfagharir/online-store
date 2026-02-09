import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const SelectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice += existingItem.price;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
        state.totalPrice += product.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;
      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
decreaseQuantity(state, action) {
  const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
      item.quantity--;
      state.totalQuantity--;
      state.totalPrice -= item.price;
      if (item.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  SelectedProductsSlice.actions;

export default SelectedProductsSlice.reducer;
