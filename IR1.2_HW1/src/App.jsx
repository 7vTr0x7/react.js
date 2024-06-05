const StudentDetails = () => {
  const details = {
    name: "Bob",
    age: 20,
    grade: "A",
  };

  return (
    <div>
      <h2>Name: {details.name}</h2>
      <p>
        <b>Age: </b>
        {details.age}
      </p>
      <p>
        <b>Grade: </b>
        {details.grade}
      </p>
    </div>
  );
};

const Product = () => {
  const details = {
    name: "Laptop",
    brand: "Dell",
    price: 20000,
  };

  return (
    <div>
      <p>
        <b>Name: </b>
        {details.name}
      </p>
      <p>
        <b>Brand: </b>
        {details.brand}
      </p>
      <p>
        <b>Price: </b>INR {details.price}
      </p>
    </div>
  );
};

const UserDetails = () => {
  const details = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 main",
      city: "New York",
      state: "CA",
      zipcode: "234543",
    },
  };

  return (
    <div>
      <p>
        <b>Name: </b>
        {details.name}
      </p>
      <p>
        <b>Age: </b>
        {details.age}
      </p>
      <p>
        <b>Address: </b>
        {details.address.street}, {details.address.city},{" "}
        {details.address.state}, {details.address.zipcode}
      </p>
    </div>
  );
};

const MovieDetails = () => {
  const details = {
    title: "Inception",
    releaseYear: 2010,
    director: {
      name: "Christopher Nolan",
      nationality: "British",
    },
    genre: ["Sci-Fi", "Action", "Thriller"],
  };

  return (
    <div>
      <p>
        <b>Title: </b>
        {details.title}
      </p>
      <p>
        <b>Release Year: </b>
        {details.releaseYear}
      </p>
      <p>
        <b>Director: </b>
        {details.director.name} ({details.director.nationality})
      </p>
      <p>
        <b>Genre: </b>
        {details.genre.join(", ")}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Student Details</h1>
      <StudentDetails />

      <h1>Product Details</h1>
      <Product />

      <h1>User Details</h1>
      <UserDetails />
      <h1>Movie Details</h1>
      <MovieDetails />
    </div>
  );
};

export default App;
