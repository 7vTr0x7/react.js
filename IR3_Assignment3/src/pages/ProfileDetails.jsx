import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProfileDetails = () => {
  const user = useParams();

  const userData = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: "Jane Smith",
      bio: "Graphic Designer | Nature Lover",
      imageUrl: "https://via.placeholder.com/250",
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: "Alice Wonder",
      bio: "Travel Blogger | Foodie",
      imageUrl: "https://via.placeholder.com/150",
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const userInfo = { ...userData[user.user] };

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <img src={userInfo.imageUrl} />
          </div>
          <div className=" col-md-7 container">
            <h2>{userInfo.fullName}</h2>
            <p>@{user.user}</p>
            <p>{userInfo.bio}</p>
            <p>Followers: {userInfo.followers}</p>
            <p>Following: {userInfo.following}</p>
            <p>Posts: {userInfo.posts}</p>
          </div>
        </div>
      </main>
      ;
      <Footer />
    </>
  );
};

export default ProfileDetails;
