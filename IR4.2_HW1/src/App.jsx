import CalculateAge from "./components/CalculateAge";
import CheckPassword from "./components/CheckPassword";
import DisplayColor from "./components/DisplayColor";
import ValidateNumber from "./components/ValidateNumber";

const App = () => {
  return (
    <div>
      <ValidateNumber />
      <br />
      <CheckPassword />
      <br />
      <CalculateAge />
      <br />
      <DisplayColor />
    </div>
  );
};

export default App;
