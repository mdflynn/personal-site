import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Portfolio from "./index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Portfolio", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    )
  })

  it("should render the portfolio", () => {
    const portfolio = screen.getByText("My Portfolio");
    expect(portfolio).toBeInTheDocument();
  });

  it("should have game sleuth", () => {
    const gameslueth = screen.getByText("Game Slueth");
    expect(gameslueth).toBeInTheDocument();
  })

  it("should have rancid tomatillos", () => {
    const rancid = screen.getByText("Rancid Tomatillos");
    expect(rancid).toBeInTheDocument();
  })

  it("should have slap jack", () => {
    const slapjack = screen.getByText("Slap Jack");
    expect(slapjack).toBeInTheDocument();
  })
  
  it("should have coming soon", () => {
    const coming = screen.getByTestId("coming-soon")
    expect(coming).toBeInTheDocument();
  })
})