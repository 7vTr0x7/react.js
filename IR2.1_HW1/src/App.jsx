const Cars = ({ cars }) => {
  const carListing = cars.map((car) => (
    <div key={car.id}>
      <h2>Brand: {car.brand}</h2>
      <p>Price: ${car.price}</p>
    </div>
  ));

  return (
    <>
      <h1>Cars</h1>
      {carListing}
    </>
  );
};

const Hotels = ({ hotels }) => {
  const hotelListing = hotels.map((hotel) => (
    <div key={hotel.id}>
      <h2>Name: {hotel.name}</h2>
      <p>Location: {hotel.location}</p>
    </div>
  ));

  return (
    <>
      <h1>Hotels</h1>
      {hotelListing}
    </>
  );
};

const Podcasts = ({ podcasts }) => {
  const podcastListing = podcasts.map((podcast) => (
    <div key={podcast.id}>
      <h2>Title: {podcast.title}</h2>
      <p>Host: {podcast.host}</p>
    </div>
  ));

  return (
    <>
      <h1>Podcasts</h1>
      {podcastListing}
    </>
  );
};

const Articles = ({ articles }) => {
  const articleListing = articles.map((article) => (
    <div key={article.id}>
      <h2>Title: {article.title}</h2>
      <p>{article.content}</p>
    </div>
  ));

  return (
    <>
      <h2>Articles</h2>
      {articleListing}
    </>
  );
};

const Movies = ({ movies }) => {
  const movieListing = movies.map((movie) => (
    <div key={movie.id}>
      <h2>Title: {movie.title}</h2>
      <p>Director: {movie.director}</p>
    </div>
  ));

  return (
    <>
      <h1>Movies</h1>
      {movieListing}
    </>
  );
};

const App = () => {
  const cars = [
    { id: 1, brand: "Toyota", price: 25000 },
    { id: 2, brand: "Honda", price: 30000 },
    { id: 3, brand: "Ford", price: 35000 },
  ];
  const hotels = [
    { id: 1, name: "Marriott", location: "New York" },
    { id: 2, name: "Hilton", location: "Los Angeles" },
    { id: 3, name: "Sheraton", location: "Chicago" },
  ];
  const podcasts = [
    { id: 1, title: "Podcast 1", host: "Host 1" },
    { id: 2, title: "Podcast 2", host: "Host 2" },
    { id: 3, title: "Podcast 3", host: "Host 3" },
  ];
  const articles = [
    { id: 1, title: "Article 1", content: "Content 1" },
    { id: 2, title: "Article 2", content: "Content 2" },
    { id: 3, title: "Article 3", content: "Content 3" },
  ];
  const movies = [
    { id: 1, title: "Movie 1", director: "Director 1" },
    { id: 2, title: "Movie 2", director: "Director 2" },
    { id: 3, title: "Movie 3", director: "Director 3" },
  ];

  return (
    <div>
      <Cars cars={cars} />
      <hr />
      <Hotels hotels={hotels} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <Articles articles={articles} />
      <hr />

      <Movies movies={movies} />
    </div>
  );
};

export default App;
