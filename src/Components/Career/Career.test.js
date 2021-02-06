import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Career from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Career", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Career />
      </MemoryRouter>
    );
  });

  it("should render the Career page", () => {
    const heading = screen.getByText("My Career Journey");
    expect(heading).toBeInTheDocument();
  });

  it("should render career information", async () => {
    const wells = screen.getByText("Wells Fargo");
    const prague = screen.getByText("Prague");
    const steamboat = screen.getByText("Steamboat Springs and MBA");
    const intrado = screen.getByText("Intrado");
    const motorolla = screen.getByText("Motorolla Solutions");
    const firstbank = screen.getByText("FirstBank");
    const turing = screen.getByText("Turing School of Software & Design");

    expect(wells).toBeInTheDocument();
    expect(steamboat).toBeInTheDocument();
    expect(prague).toBeInTheDocument();
    expect(intrado).toBeInTheDocument();
    expect(motorolla).toBeInTheDocument();
    expect(firstbank).toBeInTheDocument();
    expect(turing).toBeInTheDocument();
  });

  it("should render a button", () => {
    const button = screen.getByText("Return to top");
    expect(button).toBeInTheDocument();
  })
});
