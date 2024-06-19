import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    const msg = message.toUpperCase();
    alert(`Message: ${msg}!`);
  };

  return (
    <div>
      <label>Enter your Message: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={clickHandler}>Display Message</button>
    </div>
  );
};

export default Message;
