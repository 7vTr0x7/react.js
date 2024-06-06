const GenerateGreeting = () => {
  const name = "John";
  const greeting = (name) => {
    return `Hello, ${name}!`;
  };
  return <h1>{greeting(name)}</h1>;
};

const CalculateArea = () => {
  const length = 10;
  const width = 5;

  const calculate = (l, w) => {
    return l * w;
  };

  return <p>{`Rectangle Area: ${calculate(length, width)}`}</p>;
};

const CalculatePerimeter = () => {
  const length = 10;
  const width = 5;

  const calculate = (l, w) => {
    return l * 2 + w * 2;
  };

  return <p>{`Rectangle Area: ${calculate(length, width)}`}</p>;
};

const GenerateMessage = () => {
  const getHours = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good Morning!";
    } else if (hours < 18) {
      return "Good Afternoon!";
    } else if (hours > 18) {
      return "Good Evening!";
    }
  };

  return <h1>{getHours()}</h1>;
};

const CalculateVolume = () => {
  const radius = 3;
  const height = 5;

  const volume = (r, h) => {
    return Math.PI * (r * r) * h;
  };

  return <p>{`Volume of Cylinder: ${volume(radius, height)}`}</p>;
};
const App = () => {
  return (
    <div>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </div>
  );
};

export default App;
