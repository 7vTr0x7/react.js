import AddItem from "./components/AddItem";
import ChangeBg from "./components/ChangeBg";
import ImageSelect from "./components/ImageSelect";
import SelectItem from "./components/SelectItem";
import ToggleLoading from "./components/ToggleLoading";

const App = () => {
  return (
    <div>
      <ImageSelect />
      <hr />
      <AddItem />
      <hr />
      <ChangeBg />
      <hr />
      <ToggleLoading />
      <hr />
      <SelectItem />
    </div>
  );
};

export default App;
