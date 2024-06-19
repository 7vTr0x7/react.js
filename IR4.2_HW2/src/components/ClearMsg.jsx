import React, { useState } from "react";

const ClearMsg = () => {
  const [msg, setMsg] = useState("");

  const clickHandler = () => {
    setMsg("");
  };

  return (
    <div>
      <label>Enter a message: </label>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={clickHandler}>Clear Message</button>
    </div>
  );
};

export default ClearMsg;
