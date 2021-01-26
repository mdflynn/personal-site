import React, { useState } from "react";
import "./WelcomePage.scss";
import mike from "../../assets/headshot_nobackground.png";

const WelcomePage = () => {
  const [load, setLoad] = useState(false);

  const displayMain = () => {
    return (
      <section className="left-main">
        <p className="name">
          Mike
          <br />
          Flynn
        </p>
        <img className="headshot" src={mike} alt="Mike Headshot"/>
      </section>
    );
  };

  const displayEntrance = () => {
      return (
          <section className="left-main">
              <p className='entrance' onAnimationEnd={() => setLoad(true)}>Hi, I'm Mike</p>
          </section>
      )
  }

  return (
    <main className="welcome-main">
     {!load && displayEntrance()}
     {load && displayMain()}
      <section className="right-main"></section>
    </main>
  );
};

export default WelcomePage;
