import React, { useState } from "react";
import "./WelcomePage.scss";
import mike from "../../assets/headshot_nobackground.png";
import design from "../../assets/design.svg";

const WelcomePage = () => {
  const [load, setLoad] = useState(false);
  const [newClass, setNewClass] = useState("entrance");

  const displayMain = () => {
    return (
      <section className="left-main">
        <div className="img-div">
          <p className="name">
            Mike
            <br />
            Flynn
          </p>
          <img className="headshot" src={mike} alt="Mike Headshot" />
        </div>
      </section>
    );
  };

  const handleEntranceAnimation = () => {
    setNewClass("exit");
    setInterval(() => {
      setLoad(true);
    }, 2000);
  };

  const displayEntrance = () => {
    return (
      <section className="left-main-entrance">
        <p
          className={newClass}
          onAnimationEnd={() => {
            handleEntranceAnimation();
          }}
        >
          Hi, I'm Mike
        </p>
      </section>
    );
  };

  const displaySide = () => {
    return (
      <section className="side-section">
        <img className="shapes" src={design} alt="geometric shapes" />
        <section className="right-main">
          <p className="title">Software Engineer</p>
          <p className="location">Based in Denver,</p>
          <p className="intro">I'm a developer and fitness enthusiast.</p>
          <p className="welcome-contact">
            P: (970) 456-6128
            <br />
            E:{" "}
            <a className="email-link" href="mailto:mdflynn34@outlook.com">
              mdflynn34@outlook.com
            </a>
          </p>
        </section>
      </section>
    );
  };

  return (
    <main className="welcome-main">
      {!load && displayEntrance()}
      {load && displayMain()}
      {load && displaySide()}
    </main>
  );
};

export default WelcomePage;
