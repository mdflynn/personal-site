import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form>
      <input className="input" placeholder="Name" type="text" required="" />
      <input className="input" placeholder="Email" type="email" name="customerEmail" />
      <input
        className="input"
        placeholder="Phone"
        type="tel"
        name="customerPhone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <button className="contact-btn">Contact</button>
    </form>
  );
};

export default ContactForm;