const Laptops = ({ laptops }) => {
  const laptopListing = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h2>{laptop.brand}</h2>
      <p>Price: ${laptop.price}</p>
    </div>
  ));

  return (
    <>
      <h1>Laptops</h1>
      {laptopListing}
    </>
  );
};

const TouristSpots = ({ touristSpots }) => {
  const touristSpotListing = touristSpots.map((touristSpot) => (
    <div key={touristSpot.id}>
      <h2>{touristSpot.name}</h2>
      <p>Location: {touristSpot.location}</p>
    </div>
  ));

  return (
    <>
      <h1>Tourist Spots</h1>
      {touristSpotListing}
    </>
  );
};

const PodcastEpisodes = ({ podcastEpisodes }) => {
  const episodeListing = podcastEpisodes.map((episode) => (
    <div key={episode.id}>
      <h2>{episode.episode}</h2>
      <p>Duration: {episode.duration}</p>
    </div>
  ));

  return (
    <>
      <h1>Podcast Episodes</h1>
      {episodeListing}
    </>
  );
};

const NewsArticles = ({ newsArticles }) => {
  const articleListing = newsArticles.map((article) => (
    <div key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  ));

  return (
    <>
      <h1>News Articles</h1>
      {articleListing}
    </>
  );
};

const Games = ({ games }) => {
  const gameListing = games.map((game) => (
    <div key={game.id}>
      <h2>{game.title}</h2>
      <p>Genre: {game.genre}</p>
    </div>
  ));

  return (
    <>
      <h1>Games</h1>
      {gameListing}
    </>
  );
};

const App = () => {
  const laptops = [
    { id: 1, brand: "Dell", price: 999 },
    { id: 2, brand: "HP", price: 899 },
    { id: 3, brand: "Lenovo", price: 1099 },
  ];

  const touristSpots = [
    { id: 1, name: "Grand Canyon", location: "Arizona, USA" },
    { id: 2, name: "Eiffel Tower", location: "Paris, France" },
    { id: 3, name: "Great Wall of China", location: "Beijing, China" },
  ];

  const podcastEpisodes = [
    { id: 1, episode: "Episode 1", duration: "30 minutes" },
    { id: 2, episode: "Episode 2", duration: "45 minutes" },
    { id: 3, episode: "Episode 3", duration: "60 minutes" },
  ];

  const newsArticles = [
    { id: 1, title: "News 1", description: "Description 1" },
    { id: 2, title: "News 2", description: "Description 2" },
    { id: 3, title: "News 3", description: "Description 3" },
  ];

  const games = [
    { id: 1, title: "Game 1", genre: "Action" },
    { id: 2, title: "Game 2", genre: "Adventure" },
    { id: 3, title: "Game 3", genre: "Strategy" },
  ];

  return (
    <div>
      <Laptops laptops={laptops} />
      <hr />
      <TouristSpots touristSpots={touristSpots} />
      <hr />
      <PodcastEpisodes podcastEpisodes={podcastEpisodes} />
      <hr />
      <NewsArticles newsArticles={newsArticles} />
      <hr />
      <Games games={games} />
    </div>
  );
};

export default App;
