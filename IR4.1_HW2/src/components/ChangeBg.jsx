import React, { useState } from "react";

const ChangeBg = () => {
  const [color, setColor] = useState(undefined);

  const colors = [
    "lightgreen",
    "lightblue",
    "lightgray",
    "lightyellow",
    "lightpink",
  ];

  const changeColor = () => {
    const indx = Math.floor(Math.random() * colors.length);

    setColor(colors[indx]);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <p>Background Color is {color}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ChangeBg;
