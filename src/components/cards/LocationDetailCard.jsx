import React from "react";
import "./Cards.css";
import { Grid, Icon } from "semantic-ui-react";

const LocationDetailCard = ({ imageUrl, location }) => {
    const { Column } = Grid;
  return (
    <div>
      <div className="location-detail-card" style={{ backgroundImage: `url(${imageUrl})`}}>
          <div className="top-card-content">
            <Grid>
                <Column width={10}>
                    <h4 className="location-detail-card-name">{location}</h4>
                </Column>
                <Column  width={5}>
                    <Icon name="heart" />
                </Column>
            </Grid>
          </div>
      </div>
    </div>
  );
};

export default LocationDetailCard;
