import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("ContactForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ContactForm />
      </MemoryRouter>
    );
  });
  it("should render the contact form", () => {
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email");
    const number = screen.getByPlaceholderText("Phone");
    const message = screen.getByPlaceholderText("Message");
    const button = screen.getByText("Contact");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should update the name on change", () => {
    const name = screen.getByPlaceholderText("Name");
    userEvent.type(name, "Mike");
    expect(name.value).toBe("Mike");
  });

  it("should update the email on change", () => {
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "mdfly");
    expect(email.value).toBe("mdfly");
  });

  it("should update the phone on change", () => {
    const phone = screen.getByPlaceholderText("Phone");
    userEvent.type(phone, "970 456");
    expect(phone.value).toBe("970 456");
  });

  it("should update the message on change", () => {
    const message = screen.getByPlaceholderText("Message");
    userEvent.type(message, "test message");
    expect(message.value).toBe("test message");
  });
});
