import { createSlice } from "@reduxjs/toolkit";

const productsList = createSlice({
  name: "products list",
  initialState: { allProductList: [], listByCategory: [] },
  reducers: {
    updateAllProductList(state, action) {
      state.allProductList = action.payload;
      state.listByCategory = action.payload;
    },
    addListByCategory(state, action) {
      if (action.payload === 'all' || action.payload === null) {
        state.listByCategory = state.allProductList
        return
      }

      const actionList = state.allProductList.filter(
        (product) => product.category === action.payload
      );
      state.listByCategory = actionList;
    }
  },
});

export const productsListActions = productsList.actions;
export default productsList;
