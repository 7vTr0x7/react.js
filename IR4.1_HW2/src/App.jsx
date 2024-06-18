import AddItem from "./components/AddItem";
import ChangeBg from "./components/ChangeBg";
import ImageSelect from "./components/ImageSelect";

const App = () => {
  return (
    <div>
      <ImageSelect />
      <hr />
      <AddItem />
      <hr />
      <ChangeBg />
    </div>
  );
};

export default App;
