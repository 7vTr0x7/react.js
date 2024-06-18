import React, { useState } from "react";

const AddItem = () => {
  const [items, setItems] = useState([]);

  const itemListing = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <button
        onClick={() =>
          setItems((item) => [...item, `Item ${items.length + 1}`])
        }>
        Add Item
      </button>

      <ul>{itemListing}</ul>
    </div>
  );
};

export default AddItem;
