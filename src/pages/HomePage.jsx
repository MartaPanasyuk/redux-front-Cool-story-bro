import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSpace } from "../store/space/selectors";
import { fetchSpaces } from "../store/space/thunks";

export default function HomePage() {
  const spaces = useSelector(selectSpace);

  const dispatch = useDispatch();

  useEffect(() => {
    // thunk to fetch all posts
    dispatch(fetchSpaces());
  }, [dispatch]); // what I need to put here?
  console.log("what is my spaces", spaces);

  return (
    <div>
      <h2>List of Spaces</h2>
      {!spaces
        ? "Loading"
        : spaces.map((space) => (
            <div
              style={{
                backgroundColor: space.backgroundColor,
                color: space.color,
              }}
              key={space.id}
            >
              <h3>{space.title}</h3>
              <p>{space.description}</p>
              <Link
                to={`/space/${space.id}`}
                style={{ backgroundColor: "#C199AE" }}
              >
                {" "}
                Visit space
              </Link>
            </div>
          ))}
    </div>
  );
}
