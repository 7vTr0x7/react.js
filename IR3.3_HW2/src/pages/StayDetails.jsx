import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const StayDetails = () => {
  const stayId = useParams();

  const stays = [
    {
      id: 1,
      name: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      description: "Escape to a charming cottage nestled in the mountains.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price_per_night: 150,
    },
    {
      id: 2,
      name: "Urban Apartment",
      type: "Apartment",
      location: "San Francisco, CA",
      rating: 4.5,
      description: "Modern apartment in the heart of the city.",
      amenities: ["WiFi", "Gym", "Rooftop Terrace"],
      price_per_night: 200,
    },
    {
      id: 3,
      name: "Beachfront Villa",
      type: "Villa",
      location: "Malibu, CA",
      rating: 4.9,
      description: "Luxury villa with stunning ocean views.",
      amenities: ["Pool", "Beach Access", "Hot Tub"],
      price_per_night: 500,
    },
    {
      id: 4,
      name: "Rustic Cabin",
      type: "Cabin",
      location: "Lake Tahoe, CA",
      rating: 4.7,
      description: "Cozy cabin surrounded by nature.",
      amenities: ["Fireplace", "Hiking Trails", "BBQ Grill"],
      price_per_night: 180,
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);

  const amenities = stayData.amenities.map((amenity) => (
    <li key={amenity}>{amenity}</li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <h1 className="fs-1 fw-normal">{stayData.name}</h1>
          <p>Type: {stayData.type}</p>
          <p>Location: {stayData.location}</p>
          <p>Rating: {stayData.rating}</p>
          <p>{stayData.description}</p>
        </div>
        <hr />
        <div>
          <h3 className="my-4">Amenities</h3>
          <ul>{amenities}</ul>
          <p>Price: ${stayData.price_per_night}/night</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StayDetails;
