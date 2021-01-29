import React, { useState } from "react";
import "./About.scss";
import nightPrague from '../../assets/night-prague.jpg';
import steamboat from '../../assets/steamboat.jpg';
import denver from '../../assets/denver.jpg';
import dispatchCenter from '../../assets/dispatchCenter.jpg';
import careerChange from '../../assets/careerChange.jpg';
import coding from '../../assets/coding.jpg';
import wellsFargo from '../../assets/wellsFargo.jpg';

const About = () => {
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
    <section className="about-container">
      <section className="about-even">
      <img className="about-img" src={wellsFargo} alt="prague at night" />
        <p className="about-even-p">
          After I graduated UNC, I spent a few months selling Hyundais before I
          found my first career oriented job. I started off at Wells Fargo
          Financial. I spent a year commuting back and forth from Fort Collins,
          CO to Cheyenne, WY. During this role, I focused on generating
          appointments and leads in order to offer a customer a wide range of
          credit offerings. I received a District Employee of the Month award
          for the success I was having in the role. I transferred over to the
          banking side eventually, working my way up from a teller to a personal
          banker. I consistently met and surpassed rigorous sales goals while
          ensuring customer's were set up in the best available banking
          situation.
        </p>
      </section>
      <section className="about-odd">
        <p className="about-odd-p">
          After I spent roughly three years working for Wells Fargo at varying
          locations, I decided that I wasn't happy where I was and how my career
          was shaping up. I didn't feel strongly about my job and that it would
          bring my the type of challenges I was looking for. I ended up
          quitting, casing out my 401(k) plan and moving Prague, Czech Republic
          to get certified in Teaching English as a Foreign Language (TEFL). Due
          to Eyjafjallajökull in Iceland erupting right when we were supposed to
          fly to Europe, this trip only lasted four months. I was able to earn
          my certification, do a bit of teaching, and explore central and
          eastern Europe. It was a life-changing experience
        </p>
        <img className="about-img" src={nightPrague} alt="prague at night" />
      </section>
      <section className="about-even">
        <img className="about-img" src={steamboat} alt="steamboat" />
        <p className="about-even-p">
          After I came back from Europe, I spent some time worker as a teller
          and snowboarding as much as possible living in Steamboat Springs, CO.
          I needed to kill some time before I went to my MBA program in the
          following summer. It was a season with heavy snow and great runs. It
          was an amazing experience, both on the mountain and in the community.
          During that time, I was able to campaign and win the title of
          Steamboat's Most Eligible Bachelor; my crowning achievement! I then
          spent the next two years living in Denver and attending the University
          of Colorado at Denver. I was to graduate with my MBA that focuses on
          International Business.
        </p>
      </section>
      <section className="about-odd">
        <p className="about-odd-p">
          After my MBA, I worked at Intrado for three years. A company that's in
          the public safety and telecommunication industry. I worked my way up
          to a Senior Implementation Specialist. I handle projects that ranged
          in size and focused on implementing and decommissioning cellular
          site's 911 data and routing. Ensuring that 911 calls were properly
          routed to the nearest PSAP (Public Safety Answering Point).
        </p>
        <img className="about-img" src={denver} alt="denver" />
      </section>
      <section className="about-even">
        <img className="about-img" src={dispatchCenter} alt="911 dispatcher" />
        <p className="about-even-p">
          I took an opportunity to utilize my Public Safety knowledge and joined
          Motorolla Solutions as a Senior Account Manager. It was a great
          position and opportunity. I was responsible for accounts in five
          states in the PNW region. I was on the road most days of the week
          meeting clients and discussing their needs. I was also attending trade
          shows and demonstrating our products. However, I quickly found out,
          that this wasn't the right fit for me. I did not enjoy the traveling
          lifestyle like I initially anticipated. There's something to be said
          for sleeping in your own bed! I decided to take a break from a career
          oriented job and drove for Uber and Lyft for about a year and a half.
          It was a little awkward at first, but I grew to love the freedom it
          afforded me and I was able to make ends meet!
        </p>
      </section>
      <section className="about-odd">
        <p className="about-odd-p">
          I ended up taking an assistant supervisor position in the treasury
          management department at FirstBank. I was responsible for a team of
          nine employees that focused on phone based customer service and
          account management to our treasury management customers. I was
          responsible for interviewing and hiring new members on my team as well
          as creating training plans and having one on ones to review
          performance and discuss career goals .I worked there for just over a
          year right when COVID hit. During this time, I decided that I wanted
          to change my career path and committed to attending Turing School of
          Software & Design.
        </p>
        <img className="about-img" src={careerChange} alt="whats your next move" />
      </section>
      <section className="about-even">
      <img className="about-img" src={coding} alt="block of code" />
        <p className="about-even-p">
          I've been thinking about coding for the better part of three years. I
          tried random tutorials online but never really committed to it. But
          with Turing, I decided to fully commit to coding and the career
          change. I chose the Front-End Engineering program. This is a seven
          month, full-time coding bootcamp. On average, I'd spend 65+ hours a
          week attending class, taking notes, practicing problem solving, and
          working on the constantly changing projects with evolving languages.
          It's been the hardest thing I've ever done but so far has been the
          most rewarding journey I've taken. I've met some great people in my
          cohort and have a positive and excited outlook for my future.
        </p>
      </section>
      <footer className="about-footer">
        <button
          className={`bubbly-button ${classAnimate}`}
          onClick={animateButton}
        >
          Return to top
        </button>
      </footer>
    </section>
  );
};

export default About;

// Wells Fargo
// After I graduated UNC, I spent a few months selling Hyundais before I found my
// first career oriented job. I started off at Wells Fargo Financial. I spent a year commuting back and forth from
// Fort Collins, CO to Cheyenne, WY. During this role, I focused on generating
// appointments and leads in order to offer a customer a wide range of credit offerings. I received a
// District Employee of the Month award for the success I was having in the role. I transferred over to the banking
// side eventually, working my way up from a teller to a personal banker. I consistently met and surpassed
// rigorous sales goals while ensuring customer's were set up in the best available banking situation.

// Prague
// After I spent roughly three years working for Wells Fargo at varying locations, I decided that I wasn't happy
// where I was and how my career was shaping up. I didn't feel strongly about my job and that it would
// bring my the type of challenges I was looking for. I ended up quitting, casing out my 401(k) plan and moving
// Prague, Czech Republic to get certified in Teaching English as a Foreign Language (TEFL). Due to Eyjafjallajökull
// in Iceland erupting right when we were supposed to fly to Europe, this trip only lasted four months. I was able
// to earn my certification, do a bit of teaching, and explore central and eastern Europe. It was a life-changing
// experience

// Steamboat -> MBA
// After I came back from Europe, I spent some time worker as a teller and snowboarding as much as possible living in
// Steamboat Springs, CO. I needed to kill some time before I went to my MBA program in the following summer. It was
// a season with heavy snow and great runs. It was an amazing experience, both on the mountain and in the community.
// During that time, I was able to campaign and win the title of Steamboat's Most Eligible Bachelor; my crowning
// achievement! I then spent the next two years living in Denver and attending the University of Colorado at Denver.
// I was to graduate with my MBA that focuses on International Business.

// Intrado
// After my MBA, I worked at Intrado for three years. A company that's in the public safety and telecommunication industry.
// I worked my way up to a Senior Implementation Specialist. I handle projects that ranged in size and focused on
// implementing and decommissioning cellular site's 911 data and routing. Ensuring that 911 calls were properly routed to
// the nearest PSAP (Public Safety Answering Point).

// Motorolla and Uber
// I took an opportunity to utilize my Public Safety knowledge and joined Motorolla Solutions as a Senior Account Manager.
// It was a great position and opportunity. I was responsible for accounts in five states in the PNW region. I was on
// the road most days of the week meeting clients and discussing their needs. I was also attending trade shows and
// demonstrating our products. However, I quickly found out, that this wasn't the right fit for me. I did not enjoy the
// traveling lifestyle like I initially anticipated. There's something to be said for sleeping in your own bed! I
// decided to take a break from a career oriented job and drove for Uber and Lyft for about a year and a half. It was
// a little awkward at first, but I grew to love the freedom it afforded me and I was able to make ends meet!

// FirstBank
// I ended up taking an assistant supervisor position in the treasury management department at FirstBank. I was
// responsible for a team of nine employees that focused on phone based customer service and account management
// to our treasury management customers. I was responsible for interviewing and hiring new members on my team as well as
// creating training plans and having one on ones to review performance and discuss career goals .I worked there for just
// over a year right when COVID hit. During this time, I decided that I wanted to change my career path and committed to
// attending Turing School of Software & Design.

// Turing
// I've been thinking about coding for the better part of three years. I tried random tutorials online but never really
// committed to it. But with Turing, I decided to fully commit to coding and the career change. I chose the Front-End
// Engineering program. This is a seven month, full-time coding bootcamp. On average, I'd spend 65+ hours a week attending
// class, taking notes, practicing problem solving, and working on the constantly changing projects with evolving
// languages. It's been the hardest thing I've ever done but so far has been the most rewarding journey I've taken. I've
// met some great people in my cohort and have a positive and excited outlook for my future.
