import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="fs-1 fw-normal">Featured Products</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
