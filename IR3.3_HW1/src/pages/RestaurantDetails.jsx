import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantDetails = () => {
  const resId = useParams();

  const restaurants = [
    {
      id: "1",
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.5,
      description: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: 15 },
        { name: "Margherita Pizza", price: 12 },
        { name: "Tiramisu", price: 8 },
      ],
    },
    {
      id: "2",
      name: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townsville",
      rating: 4.2,
      description: "Savor the flavors of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: 14 },
        { name: "Vegetable Biryani", price: 12 },
        { name: "Gulab Jamun", price: 6 },
      ],
    },
    {
      id: "3",
      name: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.7,
      description: "Enjoy exquisite Japanese sushi prepared by master chefs.",
      menu: [
        { name: "California Roll", price: 10 },
        { name: "Sashimi Platter", price: 18 },
        { name: "Green Tea Ice Cream", price: 5 },
      ],
    },
  ];

  const resData = restaurants.find((res) => res.id == resId.resId);

  const menu = resData.menu.map((menu) => (
    <div key={menu.name} className="col-md-4">
      <div className="card px-3 py-2">
        <h4>{menu.name}</h4>
        <p>Price: ${menu.price}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <h1 className=" fw-normal fs-1">{resData.name}</h1>
          <p>Cuisine: {resData.cuisine}</p>
          <p>Location: {resData.location}</p>
          <p>Rating: {resData.rating}</p>
          <p>{resData.description}</p>
        </div>
        <hr />
        <div className="my-3">
          <h2 className="fw-normal fs-2">Menu</h2>
          <div className="row mt-4">{menu}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
