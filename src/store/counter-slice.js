import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.value = state.value + 1;
    },
    decrement(state) {
      state.value = state.value === 0 ? 0 : state.value - 1;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions;
