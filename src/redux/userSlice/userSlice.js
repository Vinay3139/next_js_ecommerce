import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  count: 0,
  cartItems: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showUserData: (state, action) => {
      state.userData = action.payload;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (!existingItem) {
        state.cartItems.push(item);
        state.count += 1;
      }
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.count -= 1;
    },
  },
});

export const { showUserData, setCount, addToCart, removeCartItem } =
  userSlice.actions;
export default userSlice.reducer;
