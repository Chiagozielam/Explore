import React from "react";
import "./css/locationDetails.css";
import { Grid, Responsive } from "semantic-ui-react";

const locationDetails = () => {
  const { Column, Row } = Grid;
  return (
    <div>
      <Grid>
        <Row>
          <Column mobile={16} width={7}>
            <div className="location-details">
              <h1 className="location-name">Morocco, Sanctatori</h1>
              <p className="location-details-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <button className="location-share-btns facebook-blue">share on facebook</button>
              <button className="location-share-btns twitter-blue">share on twitter</button>
              <div className="location-extras">
                <Grid>
                  <Column width={4}>
                    <button class="location-extras-boxes dark-theme">book a <br/> flight</button>
                  </Column>
                  <Column width={4}>
                    <button class="location-extras-boxes">hotel<br/> reservation</button>
                  </Column>
                  <Column width={4}>
                    <button class="location-extras-boxes dark-theme">request a <br/> travel guide</button>
                  </Column>
                </Grid>
              </div>
            </div>
          </Column>
          <Responsive minWidth={760}>
            <Column width={7}>
              <div className="location-img-container-box">
                <img
                  src="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/ajt-bin-haddu-4753097_640.jpg"
                  alt=""
                  className="location-details-img"
                />
              </div>
            </Column>
          </Responsive>
        </Row>
      </Grid>
    </div>
  );
};

export default locationDetails;
