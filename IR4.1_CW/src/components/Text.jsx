import { useState } from "react";
const Text = () => {
  const [expanded, setExpanded] = useState(false);

  const text = "This is longer text that is hidden unless is expanded.";
  return (
    <div>
      <p>{expanded ? text : `${text.substring(0, 20)}. . .`}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};

export default Text;
