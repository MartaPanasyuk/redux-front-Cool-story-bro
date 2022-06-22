import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaceList: [],
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      // action.payload => [{}, {}, {}, {}] -an array of objects that I will reseived
      state.spaceList = [...state.spaceList, ...action.payload];
    },
  },
});

export const { postsFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
