import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    accessToken: "",
  },
  reducers: {
    cart: (state, { payload }) => {
      state.cart.push(payload.cart);
    },
    auth: (state, { payload }) => {
      state.accessToken = payload.accessToken;
    },
    reset: (state, { payload }) => {
      state.accessToken = "";
    },
  },
});

export const { cart, auth, reset } = slice.actions;

export default slice.reducer;
