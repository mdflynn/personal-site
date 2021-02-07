import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Contact", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  });

  it("should render the contact component", () => {
    const contact = screen.getByText("Contact Me");
    expect(contact).toBeInTheDocument();
  });

  it("should display my phone number", () => {
    const number = screen.getByText("970 456 6128");
    expect(number).toBeInTheDocument();
  });

  it("should render an email link", () => {
    const email = screen.getByText("mdflynn34@outlook.com");
    expect(email).toBeInTheDocument();
    expect(email.closest("a")).toHaveAttribute(
      "href",
      "mailto:mdflynn34@outlook.com"
    );
  });

  it("should render a linkedin link", () => {
    const linked = screen.getByText("Mike Flynn, MBA");
    expect(linked).toBeInTheDocument();
    expect(linked.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mikeflynnmba/"
    );
  });

  it("should render a twitter link", () => {
    const twitter = screen.getByText("@mikeflynncodes");
    expect(twitter).toBeInTheDocument();
    expect(twitter.closest("a")).toHaveAttribute(
      "href",
      "https://twitter.com/messages/compose?recipient_id=1317841190478249985"
    );
  });

  it("should rendre the contact form", () => {
    const name = screen.getByPlaceholderText("Name");
    const email = screen.getByPlaceholderText("Email");
    const number = screen.getByPlaceholderText("Phone");
    const message = screen.getByPlaceholderText("Message");
    const contact = screen.getByText("Contact");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  })
});
