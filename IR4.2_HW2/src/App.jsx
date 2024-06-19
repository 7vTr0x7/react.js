import ValidateZipcode from "./components/ValidateZipcode";
import CapitalizeName from "./components/CapitalizeName";
import SearchTerm from "./components/SearchTerm";
import Address from "./components/Address";
import ClearMsg from "./components/ClearMsg";

const App = () => {
  return (
    <div>
      <ValidateZipcode />
      <br />
      <CapitalizeName />
      <br />
      <SearchTerm />
      <br />
      <Address />
      <br />
      <ClearMsg />
    </div>
  );
};

export default App;
