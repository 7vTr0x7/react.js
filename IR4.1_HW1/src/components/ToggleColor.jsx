import { useState } from "react";

const ToggleColor = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <p style={isToggled ? { color: "red" } : { color: "green" }}>
        Text Color Toggler
      </p>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle Color</button>
    </div>
  );
};

export default ToggleColor;
