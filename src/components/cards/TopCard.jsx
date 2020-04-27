import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Cards.css";

const TopCard = () => {
  return (
    <div>
      <div className="top-card" style={{ backgroundImage: `url("https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/ajt-bin-haddu-4753097_640.jpg")`}}>
          <div className="top-card-content">
            <h4>Africa</h4>
            <p>
              Lorem ipsu dullur set amnet pas decur percept
            </p>
          </div>
      </div>
    </div>
  );
};

export default TopCard;
