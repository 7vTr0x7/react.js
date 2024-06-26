const Heading = () => {
  return <h1>React Playground</h1>;
};

const Greetings = () => {
  const name = "Alice Smith";
  return <h1>Hello, {name}!</h1>;
};

const ExternalLink = () => {
  const url = "https://www.reactexamples.com";
  return (
    <a href={url} target="_blank">
      Visit React Examples
    </a>
  );
};
const Avatar = () => {
  const imgURL = "https://via.placeholder.com/200";
  return (
    <div>
      <img src={imgURL} alt="avatar" />
    </div>
  );
};

const UserInfo = () => {
  const user = {
    name: "Alice Smith",

    age: 28,

    email: "alice.smith@example.com",

    bio: "Passionate about React and building innovative web applications.",
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Age: </b> {user.age}
      </p>
      <p>
        <b>Email: </b> {user.email}
      </p>
      <p>
        <b>Bio: </b> {user.bio}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Heading />
      <Greetings />
      <ExternalLink />
      <Avatar />
      <UserInfo />
    </div>
  );
};

export default App;
