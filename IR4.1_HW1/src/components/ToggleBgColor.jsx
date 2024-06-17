import { useState } from "react";

const ToggleBgColor = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button
        style={
          isToggled
            ? { backgroundColor: "gray" }
            : { backgroundColor: "lightblue" }
        }
        onClick={() => setIsToggled(!isToggled)}>
        Toggle Background
      </button>
    </div>
  );
};

export default ToggleBgColor;
