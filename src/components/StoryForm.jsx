import React from "react";
import { useState } from "react";

export default function StoryForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
