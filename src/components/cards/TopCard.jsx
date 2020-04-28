import React from "react";
import "./Cards.css";

const TopCard = ({ imageUrl, continent, description }) => {
  return (
    <div>
      <div className="top-card" style={{ backgroundImage: `url(${imageUrl})`}}>
          <div className="top-card-content">
            <h4 className="top-card-continent">{continent}</h4>
            <p>
              {description}
            </p>
          </div>
      </div>
    </div>
  );
};

export default TopCard;
