import Footer from "../components/Footer";
import Header from "../components/Header";

const Profile = () => {
  const data = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/150",
      followers: 1000,
      following: 500,
      posts: 50,
    },
  };

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <img
              src={data.john_doe.imageUrl}
              alt={data.john_doe.fullName}
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-7 container">
            <h2>{data.john_doe.fullName}</h2>
            <p>@</p>
            <p>{data.john_doe.bio}</p>
            <p>Followers: {data.john_doe.followers}</p>
            <p>Following: {data.john_doe.following}</p>
            <p>Posts: {data.john_doe.posts}</p>
          </div>
        </div>
      </main>
      ;
      <Footer />
    </>
  );
};

export default Profile;
