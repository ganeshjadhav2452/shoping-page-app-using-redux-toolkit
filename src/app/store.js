import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './actionSlices/cartSlice'

const store = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
}) 

export default store