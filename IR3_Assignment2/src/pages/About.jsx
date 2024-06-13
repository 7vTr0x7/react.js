import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="fs-1 fw-normal">About Our Ecommerce Platform</h1>
        <p>
          Welcome to our ecommerce platform, where we bring you an unparalleled
          shopping experience tailored to meet all your needs. Our platform
          offers a vast selection of high-quality products across various
          categories, including fashion, electronics, home goods, beauty
          products, and more. We partner with top brands and trusted vendors to
          ensure that you receive only the best items at competitive prices. Our
          user-friendly website and mobile app make it easy for you to browse,
          compare, and purchase products with just a few clicks, all from the
          comfort of your home.
        </p>
        <p>
          At our platform, customer satisfaction is our top priority. We are
          dedicated to providing exceptional service through our reliable
          shipping, secure payment options, and responsive customer support
          team. Whether you are looking for the latest tech gadgets, trendy
          apparel, or everyday essentials, our goal is to exceed your
          expectations with every purchase. Join our growing community of
          satisfied customers and discover why [Your E-commerce Site Name] is
          the go-to destination for all your shopping needs. Thank you for
          choosing us as your preferred e-commerce platform.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
