import { useState } from "react";

const ValidateNumber = () => {
  const [number, setNumber] = useState();

  const clickHandler = () => {
    if (number.length === 10) {
      alert("Valid Phone Number.");
    } else {
      alert("Invalid Phone Number. Please Enter 10 digits.");
    }
  };

  return (
    <div>
      <label>Enter Your Phone Number: </label>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={clickHandler}>Validate Phone Number</button>
    </div>
  );
};

export default ValidateNumber;
