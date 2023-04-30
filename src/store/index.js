import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./popup";
import productsList from "./products-list";
import loginSlice from "./login";
import cartListSlice from "./cart-list";

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    productsList: productsList.reducer,
    login: loginSlice.reducer,
    cartList: cartListSlice.reducer
  },
});

export default store;
