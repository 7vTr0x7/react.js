import React, { useState } from "react";

const ToggleLoading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <p>{loading ? "Loading..." : "Content is Loaded."}</p>
      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
    </div>
  );
};

export default ToggleLoading;
