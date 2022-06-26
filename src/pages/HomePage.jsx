import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../store/space/selectors";

export default function HomePage() {
  const spaces = useSelector(selectSpaces);

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
              key={space.title}
            >
              <h3>{space.title}</h3>
              <p>{space.description}</p>
              <Link
                to={`/spaces/${space.id}`}
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
