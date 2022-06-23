import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectSpaceDetails,
  selectSpaceStories,
} from "../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchSpacewithStory } from "../store/space/thunks";

export default function SpaceDetails() {
  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params;

  const spaceDetails = useSelector(selectSpaceDetails);
  //for stories
  const spaceStories = useSelector(selectSpaceStories);

  //console.log("my one stiry", spaceStories);

  useEffect(() => {
    dispatch(fetchSpacewithStory(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Space Details</h2>
      {!spaceDetails ? (
        <p>Loading</p>
      ) : (
        <div
          style={{
            backgroundColor: spaceDetails.backgroundColor,
            color: spaceDetails.color,
          }}
        >
          {" "}
          <h2>{spaceDetails.title}</h2> <p>{spaceDetails.description} </p>{" "}
        </div>
      )}
      {!spaceStories ? (
        <h3>Loading</h3>
      ) : (
        spaceStories.map((story) => (
          <div>
            <h2>{story.name}</h2>
            <p>{story.content}</p>
            <img src={story.imageUrl} alt="story" />
          </div>
        ))
      )}
    </div>
  );
}
