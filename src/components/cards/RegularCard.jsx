import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

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
            <span className="date">Nigeria</span>
          </Card.Meta>
          <Card.Header className="regular-card-location-text">
            Aladumo Monument Beach
          </Card.Header>
          <button className="regular-card-btn">view details</button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RegularCard;
