import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewStory } from "../store/space/thunks";

export default function StoryForm() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewStory(name, content, imageUrl));
  };

  return (
    <div>
      <>
        {showForm ? (
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Content</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <label>Image url</label>
              <input
                type="text"
                value={imageUrl}
                alt="st"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <button type="submit">Post</button>
            <button onClick={() => setShowForm(false)}>Discard</button>
          </form>
        ) : (
          <button onClick={() => setShowForm(true)}>
            Post a cool story bro
          </button>
        )}
      </>
    </div>
  );
}
