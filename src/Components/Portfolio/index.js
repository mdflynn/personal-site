import React from "react";
import ReactPlayer from "react-player";
import "./Portfolio.scss";
import { Zoom } from "react-slideshow-image";
import Button from "../Button";
import black from "../../assets/black.jpg";

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
            href="https://https://github.com/UFOMG/ufomg-fe"
            target="_blank"
            rel="noreferrer"
          >
            UFOMG
          </a>
          <ReactPlayer
            className="slide-vid"
            url="https://youtu.be/3cCIJ7ht3as"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
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
        <div key={2} className="slide-div">
          <h1 className="sign" data-testid="coming-soon">
            Coming
            <br />
            Soon
          </h1>
          <img className="slide-img" src={black} alt="Portfolio" />
        </div>
      </Zoom>
      <footer className="about-footer">
        <h3>
          Feel free to checkout my{" "}
          <a
            className="email-link"
            href="https://www.github.com/mdflynn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          profile to for more!
        </h3>
        <Button className="top-button" />
      </footer>
    </div>
  );
};

export default Portfolio;
