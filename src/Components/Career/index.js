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

const About = () => {
  return (
    <section className="about-container">
      <h1 className="career-title">Career Journey</h1>
      <h4>(Hover to find out more)</h4>
      <AboutCard {...careerWells} />
      <AboutCard {...careerPrague} />
      <AboutCard {...careerSteamboat} />
      <AboutCard {...careerIntrado} />
      <AboutCard {...careerMotorolla} />
      <AboutCard {...careerFirstBank} />
      <AboutCard {...careerTuring} />
      <footer className="about-footer">
        <Button />
      </footer>
    </section>
  );
};

export default About;