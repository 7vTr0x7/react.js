import React, { useState } from "react";

const SearchTerm = () => {
  const [term, setTerm] = useState();

  const clickHandler = () => {
    setTerm("");
  };

  return (
    <div>
      <label>Enter Search Term: </label>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button onClick={clickHandler}>Reset Search Term</button>
      {term && <p>{term}</p>}
    </div>
  );
};

export default SearchTerm;
