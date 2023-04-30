import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: { isPopupOpen: false, product: {} }, 
    reducers: {
        open(state, action) {
            state.isPopupOpen = true
            state.product = action.payload
        },
        close(state) {
            state.isPopupOpen = false
            state.product = {}
        }
    }
})

export const popupActions = popupSlice.actions;

export default popupSlice;