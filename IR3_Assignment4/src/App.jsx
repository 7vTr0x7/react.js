import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="text-center">
          <img
            alt="todoImg"
            className="img-Fluid"
            src="https://via.placeholder.com/500x350"
          />
          <div className="py-4">
            <h2>Todos</h2>
            <p>Welcome to Todo application</p>
            <p>
              {/* <Link to="/todos" className="btn btn-primary">
                View todos
              </Link> */}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
