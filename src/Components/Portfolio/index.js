import React from "react";
import ReactPlayer from "react-player";
import "./Portfolio.scss";
import { Zoom } from "react-slideshow-image";

import black from "../../assets/black.jpg";

const Portfolio = () => {
  //animation for portfolio, then setLoad to generate slideshow

  return (
    <div className="portfolio-container">
      <h1 className="career-title">My Portfolio</h1>
      <h4>(Click title for more info)</h4>
      <Zoom clasName="test" scale={1.2}>
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
            className="slide-vid"
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
            className="slide-vid"
            url="https://youtu.be/sXMR_tVFjh8"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
        <div key={2} className="slide-div">
          <a
            className="portfolio-title"
            href="https://github.com/mdflynn/slapjack"
            target="_blank"
            rel="noreferrer"
          >
            Slap Jack
          </a>
          <ReactPlayer
            className="slide-vid"
            url="https://youtu.be/In098DzQT00"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
        <div key={2} className="slide-div test">
          <h1 className="sign">Coming<br />Soon</h1>
          <img className="slide-img" src={black} alt="Portfolio" />
        </div>
      </Zoom>
    </div>
  );
};

export default Portfolio;
