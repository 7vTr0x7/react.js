const Addition = () => {
  return (
    <div>
      <p>
        The result of {2} + {5} is {2 + 5}
      </p>
    </div>
  );
};

const TempCalculator = () => {
  const celsius = 30;
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div>
      <p>
        {celsius} degree celsius is equal to {fahrenheit} fahrenheit.
      </p>
    </div>
  );
};

const CombinedOperations = () => {
  const a = 15;
  const b = 7;
  const c = 3;

  return (
    <div>
      <p>
        {a} + {b} + {c} equals {a + b + c}
      </p>
      <p>
        {a} - {b} equals {a - b}
      </p>
      <p>
        {a} * {b} equals {a * b}
      </p>
    </div>
  );
};

const Welcome = () => {
  const firstName = "John";
  const lastName = "Doe";

  return (
    <div>
      <p>{`Welcome, ${firstName} ${lastName}`}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Addition />
      <TempCalculator />
      <CombinedOperations />
      <Welcome />
    </div>
  );
};

export default App;
