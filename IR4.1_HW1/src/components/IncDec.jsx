import { useState } from "react";

const IncDec = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default IncDec;
