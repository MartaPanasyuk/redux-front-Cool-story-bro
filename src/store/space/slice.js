import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [] || null,
  details: null || {},
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      // action.payload => [{}, {}, {}, {}] -an array of objects that I will reseived
      state.list = [...state.list, ...action.payload];
    },

    spaceDetailsFatched: (state, action) => {
      //action.payload => {} = an object with the stories
      state.details = action.payload;
    },
  },
});

export const { postsFetched, spaceDetailsFatched } = spaceSlice.actions;

export default spaceSlice.reducer;
