import React, { useState } from "react";

const SearchQuery = () => {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    setText(`Searching for ${query}.`);
  };

  return (
    <div>
      <label>Enter your search query: </label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={clickHandler}>Search</button>
      {query && <p> {text} </p>}
    </div>
  );
};

export default SearchQuery;
