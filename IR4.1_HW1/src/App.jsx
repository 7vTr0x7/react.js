import HideMsg from "./components/HideMsg";
import IncDec from "./components/IncDec";
import ToggleBgColor from "./components/ToggleBgColor";

const App = () => {
  return (
    <div>
      <IncDec />
      <hr />
      <ToggleBgColor />
      <hr />
      <HideMsg />
      <hr />
    </div>
  );
};

export default App;
