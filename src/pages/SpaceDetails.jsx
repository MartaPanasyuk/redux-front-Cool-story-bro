import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSpaceDetails } from "../store/space/selectors";
import { useParams } from "react-router-dom";

export default function SpaceDetails() {
  const params = useParams();
  const { id } = params;
  const onespace = useSelector(selectSpaceDetails(id));

  useEffect(() => {
    console.log("res", onespace);
  }, []);

  return <div>SpaceDetails</div>;
}
