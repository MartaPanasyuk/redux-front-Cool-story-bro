import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewStory } from "../store/space/thunks";

export default function StoryForm() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewStory(name, content, image));
    setName("");
    setContent("");
    setImage("");
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
              <label>Image URl</label>
              <input
                type="text"
                value={image}
                alt="st"
                onChange={(e) => setImage(e.target.value)}
              />
              {image && <img id="bla" src={image} alt="your" width={300} />}
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
