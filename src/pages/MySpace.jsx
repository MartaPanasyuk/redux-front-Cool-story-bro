import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../store/user/selectors";
import { selectAllStories } from "../store/space/selectors";
import { getUserWithStoredToken, deleteStories } from "../store/user/actions";
import { fetchStories } from "../store/space/thunks";

import StoryForm from "../components/StoryForm";
import EditProfileForm from "../components/EditProfileForm";

export default function MySpace() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allstories = useSelector(selectAllStories);
  console.log("res", allstories);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  if (!user)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <div>
      <h2>Hi {user.name} ! Welcome in Your Space</h2>
      <StoryForm />
      <h2>Hey, you can edit your space here!</h2>
      <EditProfileForm />
      <div
        style={{
          backgroundColor: user.space.backgroundColor,
          color: user.space.color,
        }}
        key={user.space.title}
      >
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
      <div>
        <h2>Your Favorite Stories</h2>
        {}
      </div>
    </div>
  );
}
