import React from "react";
import "./WelcomePage.scss";
import mike from "../../assets/headshot_nobackground.png";

const WelcomePage = () => {
  return (
    <main className="welcome-main">
      <section className="left-main">
        <p className="name">
          Mike
          <br />
          Flynn
        </p>
        <img className="headshot" src={mike} />
      </section>
      <section className="right-main"></section>
    </main>
  );
};

export default WelcomePage;
