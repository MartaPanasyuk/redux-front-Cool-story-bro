import axios from "axios";
import { postsFetched, spaceDetailsFatched } from "../space/slice";
import { addingNewStories } from "../user/slice";

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
  (name, content, imageUrl) => async (dispatch, getState) => {
    try {
      const spaceId = getState().user.profile.space.id;
      const token = getState().user.token;
      const response = await axios.post(
        `${API_URL}/spaces/${spaceId}/story`,
        { name: name, content: content, imageUrl: imageUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      //console.log("response", response.data);
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
      //console.log("response", response.data);
      dispatch();
    } catch (e) {
      console.log(e.message);
    }
  };
