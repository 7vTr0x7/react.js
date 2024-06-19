import DiaryEntry from "./components/DiaryEntry";
import Recipe from "./components/Recipe";
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
    </div>
  );
};

export default App;
