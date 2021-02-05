import React from "react";
import ReactPlayer from "react-player";
import "./Portfolio.scss";
import { Zoom } from "react-slideshow-image";

import prague from "../../assets/night-prague.jpg";

const Portfolio = () => {
  //animation for portfolio, then setLoad to generate slideshow

  return (
    <div className="portfolio-container">
      <h1 className="career-title">My Portfolio</h1>
      <h4>(Click title for more info)</h4>
      <Zoom scale={1.2}>
        <div key={0} className="slide-div">
          <a
            className="portfolio-title"
            href="https://github.com/mdflynn/game-sleuth"
            target="_blank"
            rel="noreferrer"
          >
            Game Slueth
          </a>
          <ReactPlayer
            url="https://youtu.be/grPO7Bmcg-c"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
        <div key={1} className="slide-div">
          <a
            className="portfolio-title"
            href="https://github.com/mdflynn/rancid-tomatillos"
            target="_blank"
            rel="noreferrer"
          >
            Rancid Tomatillos
          </a>
          <ReactPlayer
            url="https://youtu.be/sXMR_tVFjh8"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
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
