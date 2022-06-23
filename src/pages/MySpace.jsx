import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken, deleteStories } from "../store/user/actions";
import StoryForm from "../components/StoryForm";

export default function MySpace() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  if (!user)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  //console.log("user", user);
  return (
    <div>
      <h2>Hi {user.name} ! Welcome in Your Space</h2>
      <StoryForm />
      <div>
        <h3>{user.space.title}</h3>
        <p>{user.space.description}</p>
        {user.space.stories ? (
          user.space.stories.map((str) => (
            <div>
              <h2>{str.name}</h2>
              <p>{str.content}</p>
              <img src={str.imageUrl} alt="pict" />
              <button onClick={() => dispatch(deleteStories(str.id))}>
                Delete story
              </button>
            </div>
          ))
        ) : (
          <h3>You don't have any Stories</h3>
        )}
      </div>
    </div>
  );
}
