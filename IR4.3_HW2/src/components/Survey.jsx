import React, { useState } from "react";

const Survey = () => {
  const [survey, setSurvey] = useState("");

  const clickHandler = () => {
    alert(`Survey response: ${survey}`);
  };

  return (
    <div>
      <label>Take the survey:</label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setSurvey(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit Survey</button>
    </div>
  );
};

export default Survey;
