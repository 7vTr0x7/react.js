import React, { useState } from "react";

const CalculateAge = () => {
  const [date, setDate] = useState();

  const clickHandler = () => {
    const age = new Date().getFullYear() - date.slice(0, 4);
    alert(`Your are ${age} years old.`);
  };

  return (
    <div>
      <label>Enter your Birth Date: </label>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={clickHandler}>Calculate Age</button>
    </div>
  );
};

export default CalculateAge;
