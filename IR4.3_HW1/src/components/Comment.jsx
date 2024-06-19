import React, { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`//${comment}`);
  };

  return (
    <div>
      <label>Leave your comment: </label>
      <textarea
        rows={5}
        cols={50}
        onChange={(e) => setComment(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit Comment</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Comment;
