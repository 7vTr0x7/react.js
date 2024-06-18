import CalculateAge from "./components/CalculateAge";
import CheckPassword from "./components/CheckPassword";
import DisplayColor from "./components/DisplayColor";
import SearchQuery from "./components/SearchQuery";
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
      <br />
      <SearchQuery />
    </div>
  );
};

export default App;
