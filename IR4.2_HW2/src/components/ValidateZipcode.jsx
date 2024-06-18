import { useState } from "react";

const ValidateZipcode = () => {
  const [zipcode, setZipcode] = useState();

  const clickHandler = () => {
    if (zipcode.length === 5) {
      alert("Valid Zipcode.");
    } else {
      alert("Invalid Zipcode. Please enter 5 digits.");
    }
  };

  return (
    <div>
      <label>Enter your zipcode: </label>
      <input onChange={(e) => setZipcode(e.target.value)} />
      <button onClick={clickHandler}>Validate Zipcode</button>
    </div>
  );
};

export default ValidateZipcode;
