const ArrayOperation = () => {
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / numbers.length;
  const max = numbers.reduce((acc, curr) => {
    acc < curr ? (acc = curr) : acc;
    return acc;
  }, numbers[0]);

  const min = numbers.reduce((acc, curr) => {
    acc > curr ? (acc = curr) : acc;
    return acc;
  }, numbers[0]);

  return (
    <div>
      <h1>Array Operations</h1>
      <p>{`Sum: ${sum}`}</p>
      <p>{`Average: ${avg}`}</p>
      <p>{`Maximum: ${max}`}</p>
      <p>{`Minimum: ${min}`}</p>
    </div>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",

    age: 28,

    city: "New York",
  };

  const updatedInfo = { ...person, age: 29 };

  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {updatedInfo.name}</p>
      <p>Age: {updatedInfo.age}</p>
      <p>City: {updatedInfo.city}</p>
    </div>
  );
};

const SquareArea = () => {
  const side = 5;
  const areaOfSquare = side * side;

  return (
    <div>
      <h1>Area Of Square</h1>
      <p>{`Area of the is ${areaOfSquare}`}</p>
    </div>
  );
};

const CapitalizeString = () => {
  const text = "hello world!";
  const capitalizedText = text.toUpperCase();

  return (
    <div>
      <h1>Capitalize Text</h1>
      <p>{capitalizedText}</p>
    </div>
  );
};

const CircleArea = () => {
  const radius = 8;
  const area = Math.PI * radius ** 2;
  return (
    <div>
      <h1>Area of Circle</h1>
      <p>{`The Area of circle is  ${area.toFixed(2)}`}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ArrayOperation />
      <ObjectManipulation />
      <SquareArea />
      <CapitalizeString />
      <CircleArea />
    </div>
  );
};

export default App;
