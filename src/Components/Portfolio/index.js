import React from "react";
import "./Portfolio.scss";
import { Zoom } from "react-slideshow-image";

import denver from "../../assets/denver.jpg";
import wellsFargo from "../../assets/wellsFargo.jpg";
import prague from "../../assets/prague.jpg";

const Portfolio = () => {
  const images = [denver, wellsFargo, prague];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };

  const generateSlideshow = () => {
    return images.map((each, index) => (
      <div key={index} className="slide-div">
        <img className="slide-img" src={each} alt="Portfolio" />
      </div>
    ));
  };

  return (
    <div>
      <Zoom {...zoomInProperties}>{generateSlideshow()}</Zoom>
    </div>
  );
};

export default Portfolio;
