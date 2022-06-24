import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNewSpace } from "../store/space/thunks";

export default function EditProfileForm() {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [background, setBackground] = useState("");
  const [textcolor, setTextcolor] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNewSpace(title, description, background, textcolor));
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Content</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Background</label>
              <input
                type="color"
                value={background}
                alt="st"
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>
            <div>
              <label>Text Color</label>
              <input
                type="color"
                value={textcolor}
                alt="st"
                onChange={(e) => setTextcolor(e.target.value)}
              />
            </div>
            <button type="submit">Save Changes</button>
            <button onClick={() => setShowForm(false)}>Discard</button>
          </form>
        ) : (
          <button onClick={() => setShowForm(true)}>Edit My Space</button>
        )}
      </>
    </div>
  );
}
