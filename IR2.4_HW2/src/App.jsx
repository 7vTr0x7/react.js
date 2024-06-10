const Cars = ({ cars, model }) => {
  const carDetails = cars.find((car) => car.model === model);

  return (
    <div>
      <h1>Car Details</h1>
      <p>Model: {carDetails.model}</p>
      <p>Make: {carDetails.make}</p>
      <p>Year: {carDetails.year}</p>
    </div>
  );
};

const Gyms = ({ gyms, location }) => {
  const gymData = gyms.find((gym) => gym.location === location);

  return (
    <div>
      <h1>Gym Data</h1>
      <p>Name: {gymData.name}</p>
      <p>Location: {gymData.location}</p>
      <p>Rating: {gymData.rating}</p>
    </div>
  );
};

const Travels = ({ travels, destination }) => {
  const travelDetails = travels.find(
    (travel) => travel.destination === destination
  );

  return (
    <div>
      <h1>Travel Details</h1>
      <p>Destination: {travelDetails.destination}</p>
      <p>Duration: {travelDetails.duration}</p>
      <p>Activities: {travelDetails.activities.join(", ")}</p>
    </div>
  );
};

const Laptops = ({ laptops, processor }) => {
  const laptopData = laptops.find((laptop) => laptop.processor === processor);

  return (
    <div>
      <h1>Laptop Details</h1>
      <p>Brand: {laptopData.brand}</p>
      <p>Processor: {laptopData.processor}</p>
      <p>RAM: {laptopData.ram}</p>
    </div>
  );
};

const Recipes = ({ recipes, dish }) => {
  const recipeDetails = recipes.find((recipe) => recipe.dish === dish);

  return (
    <div>
      <h1>Recipe Details</h1>
      <p>Dish: {recipeDetails.dish}</p>
      <p>Cuisine: {recipeDetails.cuisine}</p>
      <p>Ingredients: {recipeDetails.ingredients.join(", ")}</p>
    </div>
  );
};

const BlogPosts = ({ blogPosts, title }) => {
  const blogData = blogPosts.find((blog) => blog.title === title);

  return (
    <div>
      <h1>Blog Data</h1>
      <p>Id: {blogData.id}</p>
      <p>Title: {blogData.title}</p>
      <p>Content: {blogData.content}</p>
      <p>Category: {blogData.category}</p>
    </div>
  );
};

const App = () => {
  const cars = [
    { model: "Car 1", make: "Make 1", year: 2022 },

    { model: "Car 2", make: "Make 2", year: 2021 },

    { model: "Car 3", make: "Make 3", year: 2023 },
  ];

  const gyms = [
    { name: "Gym 1", location: "Location 1", rating: 4.7 },

    { name: "Gym 2", location: "Location 2", rating: 4.2 },

    { name: "Gym 3", location: "Location 3", rating: 4.5 },
  ];

  const travels = [
    {
      destination: "Travel 1",

      duration: "5 days",

      activities: ["Hiking", "Sightseeing"],
    },

    {
      destination: "Travel 2",

      duration: "7 days",

      activities: ["Beach", "Shopping"],
    },

    {
      destination: "Travel 3",

      duration: "3 days",

      activities: ["Cultural Tours", "Photography"],
    },
  ];

  const laptops = [
    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },

    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },

    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },
  ];

  const recipes = [
    {
      dish: "Recipe 1",

      cuisine: "Italian",

      ingredients: ["Tomatoes", "Pasta", "Cheese"],
    },

    {
      dish: "Recipe 2",

      cuisine: "Mexican",

      ingredients: ["Beans", "Rice", "Avocado"],
    },

    {
      dish: "Recipe 3",

      cuisine: "Indian",

      ingredients: ["Curry", "Rice", "Naan"],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },

    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

    { id: 3, title: "Blog Post 3", content: "Content 3", category: "Fashion" },
  ];

  return (
    <div>
      <Cars cars={cars} model="Car 2" />
      <hr />
      <Gyms gyms={gyms} location="Location 2" />
      <hr />
      <Travels travels={travels} destination="Travel 3" />
      <hr />
      <Laptops laptops={laptops} processor="Apple M1" />
      <hr />
      <Recipes recipes={recipes} dish="Recipe 2" />
      <hr />
      <BlogPosts blogPosts={blogPosts} title="Blog Post 3" />
    </div>
  );
};

export default App;
