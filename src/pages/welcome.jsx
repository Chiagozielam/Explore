import React from "react";
import { Link } from "react-router-dom"
import "./css/welcome.css";

const Landing = () => {
  return (
    <div>
      <div className="landing-img">
        <img
          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588256232/explore.png"
          alt=""
        />
      </div>
      <p className="landing-text">
        View amazing tourism locations and interesting facts about places
        from around the world
      </p>
      <div>
        <Link to="/home"><button className="landing-btn">View locations</button></Link>
        <Link to="/home"><button className="landing-btn-mobile">View locations</button></Link>

      </div>
    </div>
  );
};

export default Landing;
