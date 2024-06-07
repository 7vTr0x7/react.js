const BlogPosts = ({ blogPosts }) => {
  const wordCount = blogPosts.reduce((acc, curr) => {
    const arr = [];
    if (curr.category === "Food") {
      arr.push(curr.content.split(" "));
      acc += arr[0].length;
    }

    return acc;
  }, 0);

  console.log(wordCount);
  return (
    <div>
      <p>Word Count of Blog Posts: {wordCount}</p>
    </div>
  );
};

const Laptops = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <p>Total Price of laptops: ${totalPrice} </p>
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

  return (
    <div>
      <BlogPosts blogPosts={blogPosts} />
      <Laptops laptops={laptops} />
    </div>
  );
};

export default App;
