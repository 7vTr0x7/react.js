const ProductList = ({ products }) => {
  const filteredProducts = products.filter(
    (product) => product.price >= 20 && product.price <= 50
  );

  const productListing = filteredProducts.map((product) => (
    <div key={product.id}>
      <h2>Name: {product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <>
      <h1>Products</h1>
      {productListing}
    </>
  );
};

const Restaurants = ({ restaurants }) => {
  const filteredRestaurants = restaurants.filter(
    (res) => res.cuisine === "Italian"
  );

  const restaurantListing = filteredRestaurants.map((res) => (
    <div key={res.id}>
      <h2>Name: {res.name}</h2>
      <p>Cuisine: {res.cuisine}</p>
    </div>
  ));

  return (
    <>
      <h1>Restaurants</h1>
      {restaurantListing}
    </>
  );
};

const Videos = ({ videos }) => {
  const filteredVideos = videos.filter((video) => video.views > 1000);

  const videoListing = filteredVideos.map((video) => (
    <div key={video.id}>
      <h2>Title: {video.title}</h2>
      <p>Views: {video.views}</p>
    </div>
  ));

  return (
    <>
      <h1>Videos</h1>
      {videoListing}
    </>
  );
};

const App = () => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];
  const restaurants = [
    { id: 1, name: "Restaurant 1", cuisine: "Italian" },
    { id: 2, name: "Restaurant 2", cuisine: "Mexican" },
    { id: 3, name: "Restaurant 3", cuisine: "Chinese" },
  ];

  const videos = [
    { id: 1, title: "Video 1", views: 1000 },
    { id: 2, title: "Video 2", views: 2000 },
    { id: 3, title: "Video 3", views: 3000 },
  ];

  return (
    <>
      <ProductList products={products} />
      <hr />
      <Restaurants restaurants={restaurants} />
      <hr />
      <Videos videos={videos} />
    </>
  );
};

export default App;
