import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSpaceDetails } from "../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchSpacewithStory } from "../store/space/thunks";

export default function SpaceDetails() {
  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params;

  const spaceDetails = useSelector(selectSpaceDetails);

  //console.log("my one stiry", spaceStories);

  useEffect(() => {
    dispatch(fetchSpacewithStory(id));
  }, [dispatch, id]);

  if (!spaceDetails)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  //console.log("details", spaceDetails);

  const sortedStories = [...spaceDetails.stories].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      <h2>Space Details</h2>
      <>
        <div
          style={{
            backgroundColor: spaceDetails.backgroundColor,
            color: spaceDetails.color,
          }}
        >
          {" "}
          <h2>{spaceDetails.title}</h2> <p>{spaceDetails.description} </p>{" "}
        </div>
        <div>
          {sortedStories.map((story) => (
            <div>
              <h2>{story.name}</h2>
              <p>{story.content}</p>
              <img src={story.imageUrl} alt="story" />
              <button>Delete story</button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
