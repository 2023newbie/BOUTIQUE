import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLogin: false, info: {} },
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.info = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      state.info = {};
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
