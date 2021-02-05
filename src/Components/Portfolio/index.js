import React from "react";
import "./Portfolio.scss";
import { Zoom } from "react-slideshow-image";

import rancid from "../../assets/rancid.png";
import gamesleuth from "../../assets/gamesleuth.png";
import prague from "../../assets/night-prague.jpg";

const Portfolio = () => {
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };

  //animation for portfolio, then setLoad to generate slideshow

  return (
    <div className="portfolio-container">
      <Zoom {...zoomInProperties}>
      <div key={0} className="slide-div">
        <h1 className="portfolio-title">Game Sleuth</h1>
        <img className="slide-img" src={gamesleuth} alt="Game Sleuth" />
      </div>
      <div key={1} className="slide-div">
        <h1 className="portfolio-title">Rancid Tomatillos</h1>
        <img className="slide-img" src={rancid} alt="Rancid Tomatillos" />
      </div>
      <div key={2} className="slide-div">
        <h1 className="portfolio-title">Project 3</h1>
        <img className="slide-img" src={prague} alt="Portfolio" />
      </div>
      </Zoom>
    </div>
  );
};

export default Portfolio;
