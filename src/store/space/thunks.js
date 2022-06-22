import axios from "axios";
import { postsFetched } from "../space/slice";

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
