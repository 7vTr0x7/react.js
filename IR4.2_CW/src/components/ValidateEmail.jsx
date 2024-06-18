import React, { useState } from "react";

const ValidateEmail = () => {
  const [email, setEmail] = useState();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = () => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");

    if (atIndex > 0 && atIndex < dotIndex) {
      alert("Valid Email Address");
    } else {
      alert("Invalid Email Address");
    }
  };

  return (
    <div>
      <label>Enter Email: </label>
      <input id="email" onChange={emailHandler} />
      <button onClick={clickHandler}>Validate Email</button>
    </div>
  );
};

export default ValidateEmail;
