const RandomNumber = () => {
  const num = Math.floor(Math.random() * 100);

  return <p>{`Random number: ${num}`}</p>;
};

const AbsoluteValue = () => {
  const number = -10;
  const absoluteValue = Math.abs(number);

  return <p>{`Absolute Value: ${absoluteValue}`}</p>;
};

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const sum = numbers.reduce((acc, curr) => {
    curr % 2 === 0 ? (acc += curr) : acc;
    return acc;
  }, 0);

  return <p>{`Sum of even numbers: ${sum}`}</p>;
};

const PerimeterOfSquare = () => {
  const side = 5;
  const perimeter = 4 * side;

  return (
    <div>
      <h1>Square Perimeter Calculator</h1>
      <p>{`Side Length: ${side} cm`}</p>
      <p>{`Perimeter: ${perimeter} cm`}</p>
    </div>
  );
};

const CurrencyConverter = () => {
  const usd = 50;
  const exchangeRate = 74.5;
  const amount = usd * exchangeRate;

  return (
    <div>
      <h1>Currency Convertor</h1>
      <p>{`Amount In USD: $${usd}`}</p>
      <p>{`Exchange Rate: 1 USD = ${exchangeRate} INR`}</p>
      <p>{`Amount In INR: INR ${amount}`}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />
      <PerimeterOfSquare />
      <CurrencyConverter />
    </div>
  );
};

export default App;
