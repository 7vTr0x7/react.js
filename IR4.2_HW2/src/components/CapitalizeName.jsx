import React, { useState } from "react";

const CapitalizeName = () => {
  const [name, setName] = useState("");

  const clickHandler = () => {
    const fullName = name.split(" ");
    const capitalized = fullName.map(
      (name) => `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`
    );

    const final = capitalized.join(" ");

    alert(`Capitalized Name: ${final}`);
  };

  return (
    <div>
      <label>Enter your full name: </label>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={clickHandler}>Capitalize Name</button>
    </div>
  );
};

export default CapitalizeName;
