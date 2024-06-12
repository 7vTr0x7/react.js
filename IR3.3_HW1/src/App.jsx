import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5">Featured Restaurants</h1>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid"
              alt="restaurant 1"
            />
            <h3 className="py-2">Taste of Italy</h3>
            <p>Italian | Rating: 4.5</p>
            <p>123 main street, Anytown, USA</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid"
              alt="restaurant 2"
            />
            <h3 className="py-2">Spice Village</h3>
            <p>Indian | Rating: 4.3</p>
            <p>456 Elm street, Anytown, USA</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
