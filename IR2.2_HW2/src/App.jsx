const Laptops = ({ laptops }) => {
  const filteredLaptops = laptops.filter(
    (laptop) => laptop.price > 4999 && laptop.price < 15000
  );

  const laptopListing = filteredLaptops.map((laptop) => (
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

const Books = ({ books }) => {
  const filteredBooks = books.filter((book) => book.genre === "Fantasy");

  const booksListing = filteredBooks.map((book) => (
    <div key={book.id}>
      <h2>{book.title}</h2>
      <p>Genre: {book.genre}</p>
    </div>
  ));

  return (
    <>
      <h1>Books</h1>
      {booksListing}
    </>
  );
};

const Podcasts = ({ podcasts }) => {
  const filteredPodcasts = podcasts.filter((podcast) => podcast.duration > 30);

  const podcastListing = filteredPodcasts.map((podcast) => (
    <div key={podcast.id}>
      <h2>{podcast.title}</h2>
      <p>Duration: {podcast.duration} mins</p>
    </div>
  ));

  return (
    <>
      <h1>Podcasts</h1>
      {podcastListing}
    </>
  );
};

const Movies = ({ movies }) => {
  const filteredMovies = movies.filter((movie) => movie.genre === "Action");

  const movieListing = filteredMovies.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
    </div>
  ));

  return (
    <>
      <h1>Movies</h1>
      {movieListing}
    </>
  );
};

const Jobs = ({ jobs }) => {
  const filteredJobs = jobs.filter((job) => job.type === "Full-time");

  const jobListing = filteredJobs.map((job) => (
    <div key={job.id}>
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
    </div>
  ));

  return (
    <>
      <h1>Jobs</h1>
      {jobListing}
    </>
  );
};

const Songs = ({ songs }) => {
  const filteredSongs = songs.filter((song) => song.artist === "Artist 1");

  const songListing = filteredSongs.map((song) => (
    <div key={song.id}>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
    </div>
  ));

  return (
    <>
      <h1>Songs</h1>
      {songListing}
    </>
  );
};

const App = () => {
  const laptops = [
    { id: 1, brand: "Dell", price: 8000 },

    { id: 2, brand: "HP", price: 7000 },

    { id: 3, brand: "Lenovo", price: 19000 },
  ];

  const books = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },

    { id: 2, title: "The Hobbit", genre: "Self-help" },

    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", duration: 45 },

    { id: 2, title: "Business Insights", duration: 25 },

    { id: 3, title: "Science Hour", duration: 60 },
  ];

  const movies = [
    { id: 1, title: "Mission Impossible", genre: "Action" },

    { id: 2, title: "Die Hard", genre: "Action" },

    { id: 3, title: "The Avengers", genre: "Adventure" },
  ];

  const jobs = [
    { id: 1, title: "Software Engineer", type: "Full-time" },

    { id: 2, title: "Marketing Manager", type: "Part-time" },

    { id: 3, title: "Data Analyst", type: "Full-time" },
  ];

  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1" },

    { id: 2, title: "Song 2", artist: "Artist 2" },

    { id: 3, title: "Song 3", artist: "Artist 1" },
  ];

  return (
    <div>
      <Laptops laptops={laptops} />
      <hr />
      <Books books={books} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <Movies movies={movies} />
      <hr />
      <Jobs jobs={jobs} />
      <hr />
      <Songs songs={songs} />
    </div>
  );
};

export default App;
