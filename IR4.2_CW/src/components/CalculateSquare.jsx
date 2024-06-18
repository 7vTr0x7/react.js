import { useState } from "react";

const CalculateSquare = () => {
  const [number, setNumber] = useState();
  const [squaredValue, setSquaredValue] = useState();

  const handleClick = () => {
    const square = number * number;
    setSquaredValue(square);
  };

  return (
    <div>
      <label>Enter a Number: </label>
      <input id="numberInput" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleClick}>Calculate Square</button>
      {squaredValue && <p>{squaredValue}</p>}
    </div>
  );
};

export default CalculateSquare;
