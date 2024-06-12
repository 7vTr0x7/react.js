import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>About Our Restaurants</h1>
        <div>
          <p>
            Welcome to our restaurant, where culinary artistry meets warm
            hospitality. Nestled in the heart of downtown, our restaurant is a
            celebration of exquisite flavors, meticulously crafted dishes, and
            an ambiance that transports you to a realm of gastronomic delight.
            With a passion for both tradition and innovation, we strive to offer
            an unforgettable dining experience that tantalizes the senses and
            leaves a lasting impression.
          </p>
          <p>
            At our restaurant, every dish is a masterpiece, created with the
            finest ingredients sourced locally and globally. Our talented team
            of chefs brings together a symphony of flavors from around the
            world, infusing each recipe with creativity and expertise. Whether
            you crave the comforting familiarity of classic favorites or the
            thrill of culinary exploration, our menu is designed to satisfy
            every palate and ignite the spirit of adventure.
          </p>
          <p>
            Beyond the delectable fare, our restaurant is a haven for connection
            and community. Whether you&apos;re gathering with loved ones for a
            special occasion, enjoying a romantic evening for two, or simply
            seeking a respite from the bustle of the city, our warm and
            welcoming atmosphere invites you to relax, indulge, and create
            cherished memories. Come join us on a journey of culinary discovery,
            where every meal is an opportunity to savor life&apos;s simple
            pleasures.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
