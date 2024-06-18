import CalculateAge from "./components/CalculateAge";
import CheckPassword from "./components/CheckPassword";
import ValidateNumber from "./components/ValidateNumber";

const App = () => {
  return (
    <div>
      <ValidateNumber />
      <br />
      <CheckPassword />
      <br />
      <CalculateAge />
    </div>
  );
};

export default App;
