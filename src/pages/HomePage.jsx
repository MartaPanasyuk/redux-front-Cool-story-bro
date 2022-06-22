import React from "react";
import { useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import { useSelector, useDispatch } from "react-redux";
import { selectSpace } from "../store/space/selectors";
import { fetchSpaces } from "../store/space/thunks";

export default function HomePage() {
  const allSpaces = useSelector(selectSpace);

  const dispatch = useDispatch();

  useEffect(() => {
    // thunk to fetch all posts
    dispatch(fetchSpaces());
  }, []);
  console.log("what is my spaces", allSpaces.spaceList);

  return !allSpaces.spaceList ? (
    <HeroBanner>
      <h1>Loading</h1>
    </HeroBanner>
  ) : (
    <HeroBanner>
      <h1>Home</h1>
      {allSpaces.spaceList.map((space) => (
        <div key={space.id}>
          <h2>{space.title}</h2> <p>{space.description}</p>
        </div>
      ))}
    </HeroBanner>
  );
}
