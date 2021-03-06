import React, { useState } from "react";
import "./WelcomePage.scss";
import mike from "../../assets/headshot_nobackground.png";
import design from "../../assets/design.svg";

const WelcomePage = () => {
  const [load, setLoad] = useState(false);
  const [newClass, setNewClass] = useState("entrance");

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

  const displayMain = () => {
    return (
      <>
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
        <section className="side-section">
          <img
            className="shapes load-last"
            src={design}
            alt="geometric shapes"
          />
          <section className="right-main">
            <p className="title load-last">Software Engineer</p>
            <p className="location">Based in Denver,</p>
            <p className="intro">
              I'm a developer{" "}
              <span className="intro-span">and fitness enthusiast.</span>
            </p>
            <p className="welcome-contact load-last">
              P: (970) 456-6128
              <br />
              E:{" "}
              <a className="email-link" href="mailto:mdflynn34@outlook.com">
                mdflynn34@outlook.com
              </a>
            </p>
          </section>
        </section>
      </>
    );
  };

  return (
    <main className="welcome-main">
      {!load && displayEntrance()}
      {load && displayMain()}
    </main>
  );
};

export default WelcomePage;
