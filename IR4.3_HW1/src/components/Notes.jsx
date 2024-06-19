import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Notes saved: ${notes}`);
  };

  return (
    <div>
      <label>Take your notes: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setNotes(e.target.value)}></textarea>
      <button onClick={clickHandler}>Save Notes</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Notes;
