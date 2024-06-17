import HideMsg from "./components/HideMsg";
import IncDec from "./components/IncDec";
import SelectFruit from "./components/SelectFruit";
import ToggleBgColor from "./components/ToggleBgColor";
import ToggleColor from "./components/ToggleColor";

const App = () => {
  return (
    <div>
      <IncDec />
      <hr />
      <ToggleBgColor />
      <hr />
      <HideMsg />
      <hr />
      <ToggleColor />
      <hr />
      <SelectFruit />
    </div>
  );
};

export default App;
