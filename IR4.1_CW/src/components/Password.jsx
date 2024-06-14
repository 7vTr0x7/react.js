import { useState } from "react";

const Password = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <p>{visibility ? "Password: 123456789" : "Password: *********"}</p>
      <button onClick={() => setVisibility(!visibility)}>
        Show/Hide Password
      </button>
    </div>
  );
};

export default Password;
