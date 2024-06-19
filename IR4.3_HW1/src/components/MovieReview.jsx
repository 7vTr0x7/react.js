import React, { useState } from "react";

const MovieReview = () => {
  const [review, setReview] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Your Review: ${review}`)
  };

  return (
    <div>
      <label>Enter your review</label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setReview(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit Review</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default MovieReview;
