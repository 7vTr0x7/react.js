const WelcomeMessage = (props) => {
  return <h1>Welcome {props.name}!</h1>;
};

const App = () => {
  return (
    <div>
      <WelcomeMessage name="Emily" />
    </div>
  );
};

export default App;
