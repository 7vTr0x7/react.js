import React, { useState } from "react";

const DiaryEntry = () => {
  const [entry, setEntry] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Diary entry saved: ${entry}`);
  };

  return (
    <div>
      <label>Write your diary entry: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setEntry(e.target.value)}></textarea>
      <button onClick={clickHandler}>Save Diary Entry</button>
      {text && (
        <p>
          <i>{text}</i>
        </p>
      )}
    </div>
  );
};

export default DiaryEntry;
