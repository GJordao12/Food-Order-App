import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalAmount: 0,
    hasItems: false,
  },
  reducers: {
    addToCart(state, action) {
      state.hasItems = true;
      state.totalItems += action.payload.amount;
      state.totalAmount += action.payload.price * action.payload.amount;

      const meal = state.items.find((item) => item.id === action.payload.id);

      if (meal) {
        meal.amount += action.payload.amount;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          amount: action.payload.amount,
        });
      }
    },
    removeFromCart(state, action) {
      state.totalItems--;

      if (state.totalItems === 0) {
        state.hasItems = false;
        state.totalAmount = 0;
        state.items = [];
      } else {
        const meal = state.items.find((item) => item.id === action.payload.id);
        meal.amount--;
        if (meal.amount === 0) {
          state.items = state.items.filter((item) => item.id !== meal.id);
        }
        state.totalAmount -= meal.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
