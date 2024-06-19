import { useState } from "react";

const ListItems = () => {
  const [items, setItems] = useState("");
  const [list, setList] = useState();

  const clickHandler = () => {
    const splitItems = items.split(", ");
    const itemListing = splitItems.map((item, inx) => (
      <li key={inx}>{item}</li>
    ));
    setList(itemListing);
  };

  return (
    <div>
      <label>Enter a list of items: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setItems(e.target.value)}></textarea>
      <button onClick={clickHandler}>Display Items</button>
      {list && <ul>{list}</ul>}
    </div>
  );
};

export default ListItems;
