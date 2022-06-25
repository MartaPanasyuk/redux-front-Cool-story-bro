import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewSpace } from "../store/space/thunks";
import { selectMeSpace } from "../store/user/selectors";

export default function EditProfileForm() {
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectMeSpace);
  //console.log(spaceDetails);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(spaceDetails.title);
  const [description, setDescription] = useState(spaceDetails.description);
  const [backgroundColor, setbackgroundColor] = useState(
    spaceDetails.backgroundColor
  );
  const [textcolor, setTextcolor] = useState(spaceDetails.color);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNewSpace(title, description, backgroundColor, textcolor));
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
                value={spaceDetails.backgroundColor}
                onChange={(e) => setbackgroundColor(e.target.value)}
              />
            </div>
            <div>
              <label>Text Color</label>
              <input
                type="color"
                value={textcolor}
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
