import Feedback from "./components/Feedback";
import Message from "./components/Message";
import MovieReview from "./components/MovieReview";
import Notes from "./components/Notes";

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
    </div>
  );
};

export default App;
