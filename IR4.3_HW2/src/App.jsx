import DiaryEntry from "./components/DiaryEntry";
import Recipe from "./components/Recipe";
import ShareStory from "./components/ShareStory";
import Survey from "./components/Survey";
import ListItems from "./components/ListItems";

const App = () => {
  return (
    <div>
      <h1>Text Area Program</h1>
      <Survey />
      <br />
      <Recipe />
      <br />
      <DiaryEntry />
      <br />
      <ShareStory />
      <br />
      <ListItems />
    </div>
  );
};

export default App;
