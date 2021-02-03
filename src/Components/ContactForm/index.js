import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={handlePhoneNumberChange}
      />
      <textarea
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