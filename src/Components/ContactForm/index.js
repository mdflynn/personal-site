import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import TextareaAutosize from "react-autosize-textarea"

import "./ContactForm.scss";

init("user_SWyu6G36NmjN0H1xzQ0Xc");

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phoneNumber && message) {
      emailjs
        .sendForm("service_5re318s", "template_n4lovdo", event.target)
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      alert("Please complete all fields");
    }
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        required=""
        onChange={handleNameChange}
      />
      <input
        className="input"
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="input"
        placeholder="Phone"
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        pattern="[0-9]{10}"
        onChange={handlePhoneNumberChange}
      />
      <TextareaAutosize
        className="input"
        placeholder="Message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      />
      <button className="contact-btn">Contact</button>
    </form>
  );
};

export default ContactForm;
