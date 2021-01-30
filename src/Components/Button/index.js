import React, { useState } from "react";
import "./Button.scss";

const Button = () => {
  const [classAnimate, setClassAnimate] = useState("bubbly-button");

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const animateButton = () => {
    setClassAnimate("bubbly-button");
    setClassAnimate((prevState) => `${prevState} animate`);
    setTimeout(() => {
      setClassAnimate("bubbly-button");
      topFunction();
    }, 500);
  };

  return (
    <button className={`bubbly-button ${classAnimate}`} onClick={animateButton}>
      Return to top
    </button>
  );
};

export default Button;
