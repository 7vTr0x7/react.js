import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Restaurants = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-4">Restaurants</h1>
        <div>
          <div className="card mt-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  alt="restaurant 1"
                  className="img-fluid rounded-start"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="col-md-8 py-3">
                <h4>Golden Spoon</h4>
                <p>
                  Enjoy authentic indian cuisine at Taste of india. Explore
                  variety of delicious from different regions of india.
                </p>
                <p>Rating: 4.7 | Open Now</p>
                <Link to="/restaurants/1" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  alt="restaurant 2"
                  className="img-fluid rounded-start"
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="col-md-8 py-3">
                <h4>Spice Junction</h4>
                <p>
                  Indulge in mouth-watering pizzas at pizza paradise. With
                  variety of topping and crusts, it&apos;s a pizza lovers dream.
                </p>
                <p>Rating: 4.5 | Open Now</p>
                <Link to="/restaurants/2" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-4">
              <img
                alt="restaurant 3"
                className="img-fluid rounded-start"
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="col-md-8 py-3">
              <h4>Spice Junction</h4>
              <p>
                Indulge in mouth-watering pizzas at pizza paradise. With variety
                of topping and crusts, it&apos;s a pizza lovers dream.
              </p>
              <p>Rating: 4.5 | Open Now</p>
              <Link to="/restaurants/3" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Restaurants;
