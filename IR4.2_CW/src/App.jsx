import CalculateSquare from "./components/CalculateSquare";
import GreetUser from "./components/GreetUser";
import ValidateEmail from "./components/ValidateEmail";

const App = () => {
  return (
    <div>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
      <br />
      <br />
      <CalculateSquare />
    </div>
  );
};

export default App;
