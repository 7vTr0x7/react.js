import React, { useState } from "react";

const CheckPassword = () => {
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    if (password.length > 8) {
      alert("Password Strength: Strong");
    } else {
      alert("Password Strength: Weak");
    }
  };

  return (
    <div>
      <label>Enter your password: </label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={clickHandler}>Check Password Strength</button>
    </div>
  );
};

export default CheckPassword;
