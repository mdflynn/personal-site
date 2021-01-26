import React, { useState } from "react";
import "./WelcomePage.scss";
import mike from "../../assets/headshot_nobackground.png";

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
  }

  const displayEntrance = () => {
    return (
      <section className="left-main-entrance">
        <p
          className={newClass}
          onAnimationEnd={() => {
            handleEntranceAnimation()
          }}
        >
          Hi, I'm Mike
        </p>
      </section>
    );
  };

  return (
    <main className="welcome-main">
      {!load && displayEntrance()}
      {load && displayMain()}
      <section className="right-main"></section>
    </main>
  );
};

export default WelcomePage;
