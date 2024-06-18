import AddItem from "./components/AddItem";
import ChangeBg from "./components/ChangeBg";
import ImageSelect from "./components/ImageSelect";
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
    </div>
  );
};

export default App;
