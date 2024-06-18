import { useState } from "react";

const DisplayColor = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Your favorite color is ${color}.`);
  };

  return (
    <div>
      <label>Enter your favorite color: </label>
      <input onChange={(e) => setColor(e.target.value)} />
      <button onClick={clickHandler}>Display Color</button>
      {color && <p>{text}</p>}
    </div>
  );
};

export default DisplayColor;
