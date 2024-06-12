import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal">Latest Listings</h1>
        <div>
          <div className="mt-3">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid rounded"
              alt="listing 1"
            />
            <h3 className="mt-3">Cozy Loft in the City Center</h3>
            <p>Entire loft - 2 guests - 1 bedroom - 1 bed - 1 bath </p>
            <p className="py-2">
              Enjoy your stay in this stylish loft apartment in the heart of
              city. Close to restaurants, shops, and attractions, it&apos;s a
              perfect base of exploring city.
            </p>
            <p>$120 per night</p>
          </div>
          <div className="mt-3">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid rounded"
              alt="listing 2"
            />
            <h3 className="mt-3">Beachfront Villa with Stunning Views</h3>
            <p>Entire villa - 6 guests - 3 bedrooms - 3 beds - 2 baths </p>
            <p className="py-2">
              Relax and unwind in this beautiful beachfront villa. Wake up to
              panoramic ocean views, take a dip in the private pool, and enjoy
              seamless indoor-outdoor living.
            </p>
            <p>$300 per night</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
