import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./popup-slice";

const store = configureStore({
    reducer: { popup: popupSlice.reducer }
})

export default store