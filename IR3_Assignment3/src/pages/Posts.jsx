import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const postListing = posts.map((post) => (
    <li className="list-group-item" key={post.id}>
      <h5>
        <Link to={`/posts/${post.username}`}>{post.username}</Link>
      </h5>
      <img src={post.imgUrl} alt={post.username} />
      <p>{post.content}</p>
    </li>
  ));

  return (
    <main className="container py-4">
      <h1 className="fs-1 fw-normal">Posts</h1>
      <div>
        <ul className="list-group">{postListing}</ul>
      </div>
    </main>
  );
};

export default Posts;
