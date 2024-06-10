const Exercises = ({ exercises }) => {
  const totalCal = exercises.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0
  );

  return (
    <div>
      <h1>Total Calories Burned</h1>
      <p>Total Calories Burned: {totalCal}</p>
    </div>
  );
};

const Songs = ({ songs }) => {
  const filterSongs = songs.filter((song) => song.rating > 3.9);

  const totalDuration = filterSongs.reduce(
    (acc, curr) => acc + curr.duration,
    0
  );

  return (
    <div>
      <h1>Total Duration Of Songs</h1>
      <p>Duration: {totalDuration}</p>
    </div>
  );
};

const Books = ({ books, title }) => {
  const bookDetails = books.find((book) => book.title === title);

  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {bookDetails.title}</p>
      <p>Author: {bookDetails.author}</p>
      <p>Genre: {bookDetails.genre}</p>
    </div>
  );
};

const Cities = ({ cities, name }) => {
  const cityDetails = cities.find((city) => city.name === name);

  return (
    <div>
      <h1>City Details</h1>
      <p>Name: {cityDetails.name}</p>
      <p>Population: {cityDetails.population}</p>
    </div>
  );
};

const SongsData = ({ songs, title }) => {
  const songDetails = songs.find((song) => song.title === title);

  return (
    <div>
      <h1>Song Details</h1>
      <p>Title: {songDetails.title}</p>
      <p>Artist: {songDetails.artist}</p>
      <p>Genre: {songDetails.genre}</p>
    </div>
  );
};

const Products = ({ products, productId }) => {
  const productDetails = products.find((product) => product.id === productId);

  return (
    <div>
      <h1>Product Details</h1>
      <p>Id: {productDetails.id}</p>
      <p>Name: {productDetails.name}</p>
      <p>Price: ${productDetails.price}</p>
    </div>
  );
};

const Students = ({ students, name }) => {
  const studentDetails = students.find((student) => student.name === name);

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {studentDetails.name}</p>
      <p>Age: {studentDetails.age}</p>
      <p>Math: {studentDetails.grades.math}</p>
      <p>Science: {studentDetails.grades.science}</p>
      <p>English: {studentDetails.grades.english}</p>
    </div>
  );
};

const Orders = ({ orders, customer }) => {
  const orderDetails = orders.find((order) => order.customer === customer);
  const products = orderDetails.products.map((product) => (
    <div key={product.id}>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  ));

  return (
    <div>
      <h1>Order Details</h1>
      <p>Customer: {orderDetails.customer}</p>
      <h4>Products: </h4>
      {products}
      <p>Total Amount: {orderDetails.totalAmount}</p>
    </div>
  );
};

const Employees = ({ employees, empId }) => {
  const empDetails = employees.find((employee) => employee.id === empId);

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {empDetails.name}</p>
      <p>Position: {empDetails.position}</p>
      <p>
        Department: {empDetails.department.name} (
        {empDetails.department.location})
      </p>
    </div>
  );
};

const Store = ({ store }) => {
  const { categories } = store;

  // const filterProduct = categories.filter(
  //   (category) => category.itemDetail.inStock
  // );

  // const productCount = filterProduct.length;

  const productCount = categories.reduce(
    (acc, curr) => (curr.itemDetail.inStock ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <h1>Total Number of Products In Stock</h1>
      <p>Total Number: {productCount} </p>
    </div>
  );
};

const App = () => {
  const store = {
    name: "Tech Emporium",

    categories: [
      {
        id: 1,
        name: "Electronics",
        itemDetail: { id: 101, product: "Laptop", inStock: true },
      },

      {
        id: 2,
        name: "Accessories",
        itemDetail: { id: 201, product: "Headphones", inStock: true },
      },

      {
        id: 3,
        name: "Electronics",
        itemDetail: { id: 301, product: "Heater", inStock: false },
      },
    ],
  };

  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Software Engineer",
      department: { name: "Engineering", location: "Building A" },
    },

    {
      id: 2,
      name: "Sam Smith",
      position: "Marketing Manager",
      department: { name: "Marketing", location: "Building B" },
    },

    {
      id: 3,
      name: "Mike Johnson",
      position: "HR Specialist",
      department: { name: "Human Resources", location: "Building C" },
    },
  ];

  const orders = [
    {
      id: 1,
      customer: "John Doe",
      totalAmount: 150,
      products: [
        { id: 101, name: "Widget", quantity: 2 },
        { id: 102, name: "Gadget", quantity: 1 },
      ],
    },

    {
      id: 2,
      customer: "Alice Smith",
      totalAmount: 200,
      products: [
        { id: 103, name: "Tool", quantity: 1 },
        { id: 104, name: "Device", quantity: 3 },
      ],
    },

    {
      id: 3,
      customer: "Bob Johnson",
      totalAmount: 100,
      products: [{ id: 105, name: "Accessory", quantity: 5 }],
    },
  ];

  const students = [
    {
      id: 1,
      Age: "Alice",
      age: 20,
      grades: { math: 90, science: 85, english: 92 },
    },

    {
      id: 2,
      name: "Bob",
      age: 22,
      grades: { math: 78, science: 80, english: 85 },
    },

    {
      id: 3,
      name: "Charlie",
      age: 21,
      grades: { math: 95, science: 88, english: 94 },
    },
  ];

  const songsArray = [
    {
      id: 1,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Rock",
    },

    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },

    { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  ];

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },

    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },

    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
    },
  ];

  const songs = [
    { id: 1, title: "Song A", duration: 180, rating: 4.2 },

    { id: 2, title: "Song B", duration: 210, rating: 3.8 },

    { id: 3, title: "Song C", duration: 150, rating: 4.5 },
  ];

  const exercises = [
    { id: 1, name: "Running", caloriesBurned: 300 },

    { id: 2, name: "Cycling", caloriesBurned: 200 },

    { id: 3, name: "Swimming", caloriesBurned: 400 },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },

    { id: 2, name: "Paris", population: 2200000 },

    { id: 3, name: "Tokyo", population: 3770000 },
  ];

  const products = [
    { id: 1, name: "Laptop", price: 1200 },

    { id: 2, name: "Smartphone", price: 800 },

    { id: 3, name: "Headphones", price: 60 },
  ];

  return (
    <div>
      <Exercises exercises={exercises} />
      <hr />
      <Songs songs={songs} />
      <hr />
      <Books books={books} title="The Great Gatsby" />
      <hr />
      <SongsData songs={songsArray} title="Bohemian Rhapsody" />
      <hr />
      <Cities cities={cities} name="Paris" />
      <hr />
      <Products products={products} productId={3} />
      <hr />
      <Students students={students} name="Charlie" />
      <hr />
      <Orders orders={orders} customer="Alice Smith" />
      <hr />
      <Employees employees={employees} empId={1} />
      <hr />
      <Store store={store} />
    </div>
  );
};

export default App;
