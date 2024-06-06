const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];

  const reverseArray = (arr) => {
    return arr.reverse();
  };

  return (
    <div>
      <h2>Reversed Array</h2>
      <p>{`ReversedArray: ${reverseArray(originalArray)}`}</p>
    </div>
  );
};

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

    "Stay hungry, stay foolish. - Steve Jobs",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];

  const display = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{display(quotes)}</p>
    </div>
  );
};

const CalculateBMI = () => {
  const weight = 70;
  const height = 1.75;

  const calculate = (w, h) => {
    return w / (h * h);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <p>{`BMI: ${calculate(weight, height).toFixed(2)}`}</p>
    </div>
  );
};

const GradeAnalyser = () => {
  const score = 85;
  let grade = "";
  let msg = "";

  const display = (score) => {
    if (score >= 90 && score <= 100) {
      grade = "A";
      msg = "Excellent work!";
    } else if (score >= 80 && score <= 89) {
      grade = "B";
      msg = "Good job!";
    } else if (score >= 70 && score <= 79) {
      grade = "C";
      msg = "Not bad, keep it up!";
    } else if (score >= 60 && score <= 69) {
      grade = "D";
      msg = "You passed, but aim higher next time.";
    } else if (score < 60) {
      grade = "F ";
      msg = "Sorry, you didn't pass. Keep working hard!";
    }
  };
  display(score);

  return (
    <div>
      <h2>Grade Analyzer</h2>
      <p>{`Score: ${score}`}</p>
      <p>{`Grade: ${grade}`}</p>
      <p>{`${msg}`}</p>
    </div>
  );
};

const TemperatureFeedback = () => {
  const temp = 25;

  const feedback = (temp) => {
    if (temp < 0) {
      return "Brr, it's freezing!";
    } else if (temp >= 0 && temp < 10) {
      return "It's quite cold, bundle up!";
    } else if (temp >= 10 && temp < 20) {
      return "The weather is cool and comfortable.";
    } else if (temp >= 20 && temp < 30) {
      return "It's a warm day!";
    } else if (temp >= 30) {
      return "It's hot outside, stay cool!";
    }
  };

  return (
    <div>
      <h2>Temperature Feedback</h2>
      <p>{`Current Temperature: ${temp} degree celsius.`}</p>
      <p>{feedback(temp)}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ReverseArray />
      <GenerateQuote />
      <CalculateBMI />
      <GradeAnalyser />
      <TemperatureFeedback />
    </div>
  );
};

export default App;
