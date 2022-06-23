import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

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

  return (
    <div>
      <h2>MySpace</h2> <h2>Hi {user.name} !</h2>
      <div>
        <h3>{user.space.title}</h3>
        {user.space.stories ? (
          user.space.stories.map((str) => (
            <div>
              <h2>{str.name}</h2>
              <p>{str.content}</p>
              <img src={str.imageUrl} alt="pict" />
            </div>
          ))
        ) : (
          <h3>You don't have any Stories</h3>
        )}
      </div>
    </div>
  );
}
