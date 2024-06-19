import React, { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState("");

  const clickHandler = () => {
    setAddress("");
  };

  return (
    <div>
      <label>Enter your address: </label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={clickHandler}>Reset Address</button>
      {address && <p>{address}</p>}
    </div>
  );
};

export default Address;
