import DiaryEntry from "./components/DiaryEntry";
import Recipe from "./components/Recipe";
import ShareStory from "./components/ShareStory";
import Survey from "./components/Survey";

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
    </div>
  );
};

export default App;
