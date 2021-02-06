import React from "react";
import "./AboutCard.scss";

const AboutCard = ({ title, description, img, alt }) => {
  return (
    <section className="about">
      <div className="text-container">
        <img className="about-img" src={img} alt={alt} />
        <div className="overlay">
          <div className="about-p">
            <h1 className="career-title">{title}</h1>
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
