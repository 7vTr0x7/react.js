const BlogPosts = ({ blogPosts }) => {
  const wordCount = blogPosts.reduce((acc, curr) => {
    const arr = [];
    if (curr.category === "Food") {
      arr.push(curr.content.split(" "));
      acc += arr[0].length;
    }

    return acc;
  }, 0);

  return (
    <div>
      <h2>Word Count of Blog Posts</h2>
      <p>{wordCount}</p>
    </div>
  );
};

const Laptops = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of laptops </h2>
      <p>${totalPrice}</p>
    </div>
  );
};

const Cafes = ({ cafes }) => {
  const filteredCafes = cafes.filter((cafe) => cafe.type === "cafe");

  const totalRating = filteredCafes.reduce((acc, curr) => acc + curr.rating, 0);
  const avgRating = totalRating / filteredCafes.length;

  return (
    <div>
      <h2>Average Rating of Cafes</h2>
      <p>{avgRating}</p>
    </div>
  );
};

const App = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },

    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

    {
      id: 3,
      title: "Blog Post 3",
      content: "Content 3",
      category: "Technology",
    },

    {
      id: 4,
      title: "Blog Post 4",
      content: "New content of food called Content 4",
      category: "Food",
    },
  ];

  const laptops = [
    { id: 1, brand: "Dell", price: 8999.99 },

    { id: 2, brand: "HP", price: 7999.99 },

    { id: 3, brand: "MacBook", price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },

    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },

    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },

    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },
  ];

  return (
    <div>
      <BlogPosts blogPosts={blogPosts} />
      <hr />
      <Laptops laptops={laptops} />
      <hr />
      <Cafes cafes={cafes} />
    </div>
  );
};

export default App;
