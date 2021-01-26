import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomePage from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Welcome Page", () => {
  it("should render the welcome page", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
    const intro = screen.getByText("Hi, I'm Mike");
    expect(intro).toBeInTheDocument();
  });

  it("should display an image after intro", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
    setInterval(() => {
      const mike = screen.getByRole("img", { name: /mike headshot/i });
      expect(mike).toBeInTheDocument();
    }, 3000);
  });

  it("should not display side information til animation end", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );

    const title = screen.queryByText("Software Engineer");
    expect(title).not.toBeInTheDocument();
  });

  it("should display side information after animation ends", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
    setInterval(() => {
      const title = screen.queryByText("Software Engineer");
      expect(title).toBeInTheDocument();
    }, 3000);
  });

  it("should have phone number and email address", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
    setInterval(() => {
      const number = screen.getByText("P: (970) 456-6128E:");
      const email = screen.getByRole("link", {
        name: /mdflynn34@outlook\.com/i,
      });
      expect(number).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }, 3000);
  });

  it("should an a mailto linked with email", () => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
    setInterval(() => {
      const email = screen.getByRole("link", {
        name: /mdflynn34@outlook\.com/i,
      });
      expect(email).toHaveAttribute("href", "mailto:mdflynn34@outlook.com");
    }, 3000);
  });
});
