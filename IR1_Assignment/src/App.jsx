const Header = () => (
  <header>
    <h1>Product Page</h1>
  </header>
);

const ProductPage = ({ productDetails, inStock }) => {
  return (
    <main>
      <h2>{productDetails.name}</h2>
      <img alt="iPhone" src={productDetails.img} />
      <p>
        <b>Price: </b>${productDetails.price}
      </p>
      <p>
        <b>Color: </b>
        {productDetails.color}
      </p>
      <p>
        <b>Description: </b>
        {productDetails.description}
      </p>
      <p>
        <b>{inStock ? "In Stock" : "Currently out of stock"}</b>
      </p>
    </main>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; 2024 Apple Inc.</p>
  </footer>
);

const App = () => {
  const productDetails = {
    name: "iPhone 15 Pro",
    img: "https://via.placeholder.com/150",
    price: 499.99,
    color: "Midnight Green",
    description:
      "The latest flagship smartphone from Apple with cutting-edge features and design.",
  };
  return (
    <>
      <Header />
      <ProductPage productDetails={productDetails} inStock={true} />
      <Footer />
    </>
  );
};

export default App;
