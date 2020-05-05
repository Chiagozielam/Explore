import React from "react";
import "./Cards.css";
import { Grid, Icon } from "semantic-ui-react";

const LocationDetailCard = ({ imageUrl, location }) => {
  const { Column } = Grid;
  return (
    <div>
      <div
        className="location-detail-card"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="top-card-content">
          <Grid className="location-detail-card-inner">
            <Column width={12}>
              <h4 className="location-detail-card-name">{location}</h4>
            </Column>
            <Column width={2}>
              <Icon name="heart" />
            </Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailCard;
