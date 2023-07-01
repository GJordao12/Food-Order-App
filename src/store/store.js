import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-reducer";
import cartSlice from "./cart-reducer";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
