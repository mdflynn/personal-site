import React from "react";
import ContactForm from "../ContactForm";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="contact-main">
      <section className="contact">
        <h1>Contact</h1>
        <div className="contact-div">
          <img className="icon" src={phone} alt="phone" />
          <div className="details">
            <p>Call Me Now</p>
            <p>970 456 6128</p>
          </div>
        </div>
        <div className="contact-div">
          <img className="icon" src={message} alt="message" />
          <div className="details">
            <p>Send Me An Email</p>
            <p>mdflynn34@outlook.com</p>
          </div>
        </div>
        <div className="contact-div">
          <img className="icon" src={linkedin} alt="linkedin" />
          <div className="details">
            <p>Reach Out On LinkedIn</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="contact-div">
          <img className="icon" src={twitter} alt="twitter" />
        <div className="details">
          <p>DM me on Twitter</p>
          <p>Twitter</p>
        </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default Contact;
//linkedin
//twitter
//email
//phone
