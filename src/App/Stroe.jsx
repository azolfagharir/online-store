import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Features/Product/ProductSlice";
import selectedProductsreducer from "../Features/SelectedProducts/SelectedProductsSlice"



export const store = configureStore({
  reducer: {
    products: productsReducer,
cart: selectedProductsreducer,
  },
});