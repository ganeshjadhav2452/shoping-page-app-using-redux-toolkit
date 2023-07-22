import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    cartStatus: false,
    totalQuantity: 0,
  },
  reducers: {
    cartStatusChanger(state) {
      state.cartStatus = !state.cartStatus;
    },
    addItemToCartAction(state, action) {
      const item = action.payload;
      const extistingItem = state.cartData.find((obj) => obj.id === item.id);
      state.totalQuantity++
      if (!extistingItem) {
        state.cartData.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          title: item.title,
        });
      }else{
        extistingItem.quantity++
        extistingItem.totalPrice = extistingItem.totalPrice + item.price
      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload;
        const extistingItem = state.cartData.find(item => item.id === id)
        state.totalQuantity--;
        console.log(extistingItem)
        if(extistingItem.quantity === 1){
                state.cartData = state.cartData.filter(item=> item.id !== id)
        }else{
        extistingItem.quantity--;
        extistingItem.totalPrice = extistingItem.totalPrice - extistingItem.price}
    },
  },
});

export const {addItemToCartAction, cartStatusChanger ,removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
