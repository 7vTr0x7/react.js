import React, { useState } from "react";

const ShareStory = () => {
  const [story, setStory] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Your story: ${story}`);
  };

  return (
    <div>
      <label>Share your story: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setStory(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit story</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default ShareStory;
