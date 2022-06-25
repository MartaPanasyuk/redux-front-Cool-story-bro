import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  details: null,
  allstory: [],
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

    savingAllStory: (state, action) => {
      state.allstory = [...state.allstory, ...action.payload];
    },
  },
});

export const { postsFetched, spaceDetailsFatched, savingAllStory } =
  spaceSlice.actions;

export default spaceSlice.reducer;
