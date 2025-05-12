import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

// all the data are stored in a reducer(cartSlice). it is a redux toolkit srote
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
