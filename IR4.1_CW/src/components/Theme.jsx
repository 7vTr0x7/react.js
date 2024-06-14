import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <>
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
          Toggle Theme
        </button>
      </div>
    </>
  );
};

export default Theme;
