import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submit, setSubmit] = useState(false);

  const clickHandler = () => {
    setSubmit(true);
  };

  return (
    <div>
      <label>Give your feedback: </label>
      <textarea
        rows={5}
        cols={50}
        onChange={(e) => setFeedback(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit</button>
      {submit && <p>Your Feedback: {feedback}</p>}
    </div>
  );
};

export default Feedback;
