import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

const RegularCard = () => {
  return (
    <div>
      <Card className="regular-card">
        <Image
          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588036752/lagos_tourism_img.jpg"
          wrapped
          ui={false}
        />
        <Card.Content className="regular-card-content">
          <Card.Meta>
            <span className="">Nigeria</span>
          </Card.Meta>
          <Card.Header className="regular-card-location-text">
            Aladumo Monument Beach
          </Card.Header>
          <Link to="/details"><button className="regular-card-btn">view details</button></Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RegularCard;
