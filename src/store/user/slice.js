import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

/*
/*
{
  profile: {
    createdAt: "2022-06-23T09:12:56.976Z"
    email: "test@test.com"
    id: 1
    name: "testuser"
    password: "$2b$10$rp9h8PoYunRkXj2pds.ODuYOmM90mREtUrBWVp4MOo8AoqWci.J.K"
    space: {
      backgroundColor: "#008000"
      color: "#ffffff"
      createdAt: "2022-06-23T09:12:57.070Z"
      description: "I got a cat from shelter. She is nice, but overweight. "
      id: 1
      stories: (2) [{…}, {…}, {new story}]
    }
  }
}
*/

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    deleteStory: (state, action) => {
      // I have stories inside my details
      // my action.payload = id
      const toDelete = action.payload;
      const storyArray = state.profile.space.stories;
      state.profile.space.stories = storyArray.filter((s) => s.id !== toDelete);
    },
  },
});

//state.user.profile.state = action.payload, action.payload is the space object with its stories

export const { loginSuccess, logOut, tokenStillValid, deleteStory } =
  userSlice.actions;

export default userSlice.reducer;
