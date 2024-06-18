import React, { useState } from "react";

const ImageSelect = () => {
  const images = [
    "https://placehold.co/50x50?text=Image 1",
    "https://placehold.co/50x50?text=Image 2",
    "https://placehold.co/50x50?text=Image 3",
  ];

  const [index, setIndex] = useState(undefined);

  const imageListing = images.map((img, indx) => (
    <img key={indx} onClick={() => setIndex(indx)} src={img} alt="images" />
  ));

  const selectedImage = images.find((img, indx) => index === indx);

  return (
    <div>
      <img
        src={selectedImage ? selectedImage : images[0]}
        alt="selectedImage"
        style={{ height: "100px", width: "100px" }}
      />
      <div>{imageListing}</div>
    </div>
  );
};

export default ImageSelect;
