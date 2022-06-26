import axios from "axios";
import { postsFetched, spaceDetailsFatched, getAllStory } from "../space/slice";
import { addingNewStories, updateSpace, updayteFav } from "../user/slice";
import { showMessageWithTimeout } from "../appState/actions";
//import { getUserWithStoredToken } from "../user/actions";

const API_URL = `http://localhost:4000`;

// All Spaces
export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/spaces`);
    //console.log("response", response.data);
    const res = response.data;
    dispatch(postsFetched(res));
  } catch (e) {
    console.log(e.message);
  }
};

//Get Space by Id includes Stories

export const fetchSpacewithStory = (spaceId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/spaces/${spaceId}`);
    //console.log("response", response.data);
    const res = response.data;
    dispatch(spaceDetailsFatched(res));
  } catch (e) {
    console.log(e.message);
  }
};

//Get a created story
export const postNewStory =
  (name, content, image) => async (dispatch, getState) => {
    try {
      const spaceId = getState().user.profile.space.id;
      const token = getState().user.token;
      const response = await axios.post(
        `${API_URL}/spaces/${spaceId}/story`,
        { name: name, content: content, imageUrl: image },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      //console.log("response", response.data);
      dispatch(showMessageWithTimeout("success", false, "It Posts!", 1500));
      dispatch(addingNewStories(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };

//Get an updayted Space
export const updateNewSpace =
  (title, description, background, textcolor) => async (dispatch, getState) => {
    try {
      const spaceId = getState().user.profile.space.id;
      const token = getState().user.token;
      const response = await axios.put(
        `${API_URL}/spaces/${spaceId}`,
        {
          title: title,
          description: description,
          background: background,
          textcolor: textcolor,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response", response.data.space);
      dispatch(updateSpace(response.data.space));
      // dispatch(getUserWithStoredToken());
    } catch (e) {
      console.log(e.message);
    }
  };

//Add Storie to the favorite list
export const addFavStory = (storyId) => async (dispatch, getState) => {
  try {
    const userId = getState().user.profile.id;
    const token = getState().user.token;
    const response = await axios.post(
      `${API_URL}/stories/favorite`,
      { userId, storyId },

      { headers: { Authorization: `Bearer ${token}` } }
    );
    //console.log("response", response.data);
    //  dispatch(addingFavorites(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

//Get all Favorites by User
export const getFavoStr = () => async (dispatch, getState) => {
  try {
    const userId = getState().user.profile.id;
    const response = await axios.get(`${API_URL}/stories/favorite/${userId}`);
    //console.log("response favorite", response.data);
    const res = response.data;
    dispatch(updayteFav(res));
  } catch (e) {
    console.log(e.message);
  }
};

//All  stories
export const fetchStories = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/stories`);
    //console.log("response", response);
    const res = response.data;
    dispatch(getAllStory(res));
  } catch (e) {
    console.log(e.message);
  }
};
