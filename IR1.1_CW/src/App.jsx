import React from "react";

const MyComponent = () => {
  return <h1>Hello, JSX</h1>;
};

const Greetings = () => {
  const name = "John";
  return <h1>Hello, {name}</h1>;
};

const LinkTag = () => {
  const url = "https://example.com";
  return (
    <a href={url} target="_blank">
      Visit Example Website
    </a>
  );
};

const ImageTag = () => {
  const imgURL = "https://via.placeholder.com/150";
  return (
    <div>
      <img src={imgURL} alt="img" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <MyComponent />
      <Greetings />
      <LinkTag />
      <ImageTag />
    </div>
  );
};

export default App;
