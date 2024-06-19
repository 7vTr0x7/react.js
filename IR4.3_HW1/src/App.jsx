import Feedback from "./components/Feedback";
import Message from "./components/Message";
import MovieReview from "./components/MovieReview";
import Notes from "./components/Notes";
import Question from "./components/Question";

const App = () => {
  return (
    <div>
      <Feedback />
      <br />
      <MovieReview />
      <br />
      <Message />
      <br />
      <Notes />
      <br />
      <Question />
    </div>
  );
};

export default App;
