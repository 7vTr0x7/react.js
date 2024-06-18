import { useState } from "react";

const GreetUser = () => {
  const [userName, setUserName] = useState();

  const inputHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <label>Enter Your Name: </label>
      <input id="userName" type="text" onChange={inputHandler} />
      {userName && <p>Hello, {userName}!</p>}
    </div>
  );
};

export default GreetUser;
