import ValidateZipcode from "./components/ValidateZipcode";
import CapitalizeName from "./components/CapitalizeName";
import SearchTerm from "./components/SearchTerm";
import Address from "./components/Address";

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
    </div>
  );
};

export default App;
