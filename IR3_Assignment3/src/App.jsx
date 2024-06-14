import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
};

export default App;
