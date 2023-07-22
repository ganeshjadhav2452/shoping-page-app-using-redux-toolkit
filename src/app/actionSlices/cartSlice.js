import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartData:[],
        cartStatus:false,
    },
    reducers:{
        cartStatusChanger(state){
            state.cartStatus = !state.cartStatus;
        }
    }
})

export const {cartStatusChanger} = cartSlice.actions;
export default cartSlice.reducer
