// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Our Application</h1>
//       <p>This is a simple application to demonstrate dynamic table rendering based on URLs.</p>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import './Home.css';
import fetchIcon from "../assets/fetchIcon.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <div className="welcome-header">
      <img src={fetchIcon} alt="Logo" className="table-logo" />
        <h1>Welcome to Our Application</h1>
        <p>
          This is a simple yet elegant app that dynamically renders tables based on URLs.
          Explore, interact, and enjoy the experience!
        </p>
        <p>Example path <span> {`${window.location.href}table?url=https://...`}</span></p>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
