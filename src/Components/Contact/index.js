import React from "react";
import ContactForm from "../ContactForm";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import "./Contact.scss";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <h1>Contact</h1>
        <img className="icon" src={phone} alt="phone" />
        <img className="icon" src={message} alt="message" />
        <img className="icon" src={linkedin} alt="linkedin" />
        <img className="icon" src={twitter} alt="twitter" />
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
