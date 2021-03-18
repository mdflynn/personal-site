import React from "react";
import "./Career.scss";
import AboutCard from "../AboutCard";
import Button from "../Button";

import {
  careerWells,
  careerPrague,
  careerSteamboat,
  careerIntrado,
  careerMotorolla,
  careerFirstBank,
  careerTuring,
} from "../../assets/careerDescription";

const Career = () => {

  return (
    <section className="about-container">
      <h1 className="career-title">My Career Journey</h1>
      <h4 className="hover-text">(Hover to find out more)</h4>
      <div>
        <AboutCard {...careerWells} />
      </div>
      <div>
        <AboutCard {...careerPrague} />
      </div>
      <div>
        <AboutCard {...careerSteamboat} />
      </div>
      <div>
        <AboutCard {...careerIntrado} />
      </div>
      <div>
        <AboutCard {...careerMotorolla} />
      </div>
      <div>
        <AboutCard {...careerFirstBank} />
      </div>
      <div>
        <AboutCard {...careerTuring} />
      </div>
      <footer className="about-footer">
        <Button />
      </footer>
    </section>
  );
};

export default Career;
