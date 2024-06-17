import HideMsg from "./components/HideMsg";
import IncDec from "./components/IncDec";
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
    </div>
  );
};

export default App;
