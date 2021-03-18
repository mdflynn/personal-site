import React from "react";
import ContactForm from "../ContactForm";
import phone from "../../assets/phone.svg";
import arrow from "../../assets/arrow.svg";
import message from "../../assets/message.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="contact-main">
      <h1 className="career-title">Contact Me</h1>
      <div className="contact-wrapper">
        <section className="contact">
          <div className="contact-div i-phone">
            <img className="icon" src={phone} alt="phone" />
            <div className="details">
              <p className="headers">Call Me Now</p>
              <p className="contact-content">970 456 6128</p>
            </div>
          </div>
          <div className="contact-div i-message">
            <img className="icon" src={message} alt="message" />
            <div className="details">
              <p className="headers">Send An Email</p>
              <a
                className="email-link"
                href="mailto:mdflynn34@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                mdflynn34@outlook.com
              </a>
            </div>
          </div>
          <div className="contact-div i-linkedin">
            <img className="icon" src={linkedin} alt="linkedin" />
            <div className="details">
              <p className="headers">Reach Out On LinkedIn</p>
              <a
                className="email-link"
                href="https://www.linkedin.com/in/mikeflynnmba/"
                target="_blank"
                rel="noreferrer"
              >
                Mike Flynn, MBA
              </a>
            </div>
          </div>
          <div className="contact-div i-twitter">
            <img className="icon" src={twitter} alt="twitter" />
            <div className="details">
              <p className="headers">DM on Twitter</p>
              <a
                className="email-link"
                href="https://twitter.com/messages/compose?recipient_id=1317841190478249985"
                data-screen-name="@mikeflynncodes"
                target="_blank"
                rel="noreferrer"
              >
                @mikeflynncodes
              </a>
            </div>
          </div>
        </section>
        <div className="message-div">
          <h2 className="send-message">Or send me a message!</h2>
          <img className="arrow" src={arrow} alt="direction arrow" />
        </div>
        <div className="contactform">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
