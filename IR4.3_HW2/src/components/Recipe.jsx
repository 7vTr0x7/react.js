import React, { useState } from "react";

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const [list, setList] = useState();

  const clickHandler = () => {
    const splitRecipe = recipe.split(". ");

    const recipeListing = splitRecipe.map((recipe, indx) => (
      <li key={indx}>{recipe}</li>
    ));
    setList(recipeListing);
  };

  return (
    <div>
      <label>Enter your recipe: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setRecipe(e.target.value)}></textarea>
      <button onClick={clickHandler}>Save recipe</button>
      {list && <ol>{list}</ol>}
    </div>
  );
};

export default Recipe;
