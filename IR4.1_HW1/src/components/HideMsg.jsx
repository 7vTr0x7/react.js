import React, { useState } from "react";

const HideMsg = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      <p style={isVisible ? { display: "block" } : { display: "none" }}>
        This is a toggleable message!
      </p>
    </div>
  );
};

export default HideMsg;
