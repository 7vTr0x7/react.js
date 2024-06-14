import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div>
      <button onClick={() => setActiveTab("Home")}>Home</button>
      <button onClick={() => setActiveTab("Profile")}>Profile</button>
      <button onClick={() => setActiveTab("Message")}>Message</button>
      <p>{`Content of ${activeTab} Tab`}</p>
    </div>
  );
};

export default Tabs;
