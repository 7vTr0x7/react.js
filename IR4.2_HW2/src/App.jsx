import ValidateZipcode from "./components/ValidateZipcode";
import CapitalizeName from "./components/CapitalizeName";
import SearchTerm from "./components/SearchTerm";

const App = () => {
  return (
    <div>
      <ValidateZipcode />
      <br />
      <CapitalizeName />
      <br />

      <SearchTerm />
    </div>
  );
};

export default App;
