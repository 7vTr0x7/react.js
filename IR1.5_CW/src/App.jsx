const Header = () => {
  return (
    <header>
      <h1>Welcome to our Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BlogDetails = ({ blogData }) => {
  return (
    <main>
      <h2>{blogData.title}</h2>
      <p>Author: {blogData.author}</p>
      <p>Date: {blogData.date}</p>
      <p>{blogData.content}</p>
      <p></p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Our Blog. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  const blogData = {
    title: "The Importance of Learning React",
    author: "Jane Doe",
    date: "March 1, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  };
  return (
    <div>
      <Header />
      <BlogDetails blogData={blogData} />
      <Footer />
    </div>
  );
};

export default App;
