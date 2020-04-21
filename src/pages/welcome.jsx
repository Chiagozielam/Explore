import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Import slides from "react-swipable-views"
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const Welcome = (props) => {
  const history = useHistory();

  const [handleOpen, setHandleOpen] = useState({ open: true });
  // const handleClick = () => {
  //   setHandleOpen({ open: true });
  // };
  const matches = useMediaQuery("(max-width:600px)");

  const onCloseFunc = () => {
    setHandleOpen({ open: false });
    history.push("/home");
  };

  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={onCloseFunc}
        onStart={onCloseFunc}
        autoplay={false}
        mobile={matches}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1587463599/image_1.png"
              alt=""
            />
          }
          mediaBackgroundStyle={{ backgroundColor: '#FF4500' }}
          style={{ backgroundColor: '#FF4500' }}
          title="EXPLORE"
          subtitle="Let’s bring you tourism from around the world"
        />
        <Slide
          media={
            <img
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1587463594/image_2.png"
              alt=""
            />
          }
          mediaBackgroundStyle={{ backgroundColor: '#FF4500' }}
          style={{ backgroundColor: '#FF4500' }}
          title="EXPLORE"
          subtitle="Anywhere country or location you want to visit. We provide you with super tourism locations around there in seconds."
        />
        <Slide
          media={
            <img
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1587463588/undraw_game_world_0o6q_1.png"
              alt=""
            />
          }
          mediaBackgroundStyle={{ backgroundColor: '#FF4500' }}
          style={{ backgroundColor: '#FF4500' }}
          title="EXPLORE"
          subtitle="To cut the long story short: Just travel around the world while we help you find where next to go"
        />
      </AutoRotatingCarousel>
    </div>
  );
};

const Test = () => {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Button onClick={handleClick}>Open carousel</Button>
      <Welcome
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
};

export default Welcome;
