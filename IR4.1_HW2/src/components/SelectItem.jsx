import React, { useState } from "react";

const SelectItem = () => {
  const [selectedItem, setSelectedItem] = useState(undefined);

  const items = ["Item 1", "Item 2", "Item 3"];

  const itemListing = items.map((item) => (
    <p key={item} onClick={() => setSelectedItem(item)}>
      {item}
    </p>
  ));

  return (
    <div>
      <div style={{ cursor: "pointer" }}>{itemListing}</div>
      <p>Selected Item: {selectedItem}</p>
    </div>
  );
};

export default SelectItem;
