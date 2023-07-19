import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import productSlice from "./products/product.slice";
export default configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});
