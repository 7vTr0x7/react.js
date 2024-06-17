import { useState } from "react";

const SelectFruit = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const [index, setIndex] = useState(0);

  const fruitListing = fruits.map((fruit, indx) => (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => setIndex(indx)}
      key={fruit}>
      {fruit}
    </li>
  ));

  const selectedFruit = fruits.find((fruit, inx) => index === inx);

  return (
    <div>
      <h2>Select a Fruit</h2>
      <ul>{fruitListing}</ul>
      <p>You Selected: {selectedFruit}</p>
    </div>
  );
};

export default SelectFruit;
