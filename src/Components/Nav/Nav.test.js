import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Nav", () => {
  it("should render the Nav", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const emblem = screen.getByText("MF");
    expect(emblem).toBeInTheDocument();
  });
  it("should render nav links", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const home = screen.getByText("Home");
    const career = screen.getByText("Career");
    const portfolio = screen.getByText("Portfolio");
    const tech = screen.getByText("Tech");
    const contact = screen.getByText("Contact");

    expect(home).toBeInTheDocument();
    expect(career).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
    expect(tech).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
});
