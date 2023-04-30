import { createSlice } from "@reduxjs/toolkit";

const cartListSlice = createSlice({
    name: 'cart-list',
    initialState: [],
    reducers: {
        add(state, action) {
            state = state.push(action.payload)
        },
    }
})

export const cartActions = cartListSlice.actions
export default cartListSlice