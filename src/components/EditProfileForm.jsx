import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function EditProfileForm() {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [textcolor, setTextcolor] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
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
                type="text"
                value={color}
                alt="st"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
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
