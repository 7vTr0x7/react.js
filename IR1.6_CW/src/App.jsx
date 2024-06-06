const CallGreetingFunction = () => {
  const getGreeting = () => {
    return "Hello World!";
  };

  return <h1>{getGreeting()}</h1>;
};

const MathOperation = () => {
  const a = 20;
  const b = 8;

  const add = (x, y) => {
    return x + y;
  };
  const sub = (x, y) => {
    return x - y;
  };

  return (
    <div>
      <p>
        {a} + {b} equals {add(a, b)}
      </p>
      <p>
        {a} - {b} equals {sub(a, b)}
      </p>
    </div>
  );
};

const GetFormattedDate = () => {
  const getDate = () => {
    return new Date().toLocaleDateString();
  };

  return <p>Current Date: {getDate()}</p>;
};

const App = () => {
  return (
    <main>
      <CallGreetingFunction />
      <MathOperation />
      <GetFormattedDate />
    </main>
  );
};

export default App;
