import { useState } from "react";

const Font = () => {
  const [fontSize, setFontSize] = useState(14);

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust my font size</p>
      <button onClick={() => setFontSize(fontSize + 1)}>
        Increase Font Size
      </button>
      <button onClick={() => setFontSize(fontSize - 1)}>
        Decrease Font Size
      </button>
    </div>
  );
};

export default Font;
