import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutCard from "./index";
import denver from "../../assets/denver.jpg";
import { MemoryRouter } from "react-router-dom";

describe("AboutCard", () => {
  it("should render AboutCard", () => {
    const data = {
      title: "test title",
      description: "test description",
      img: denver,
      alt: "denver",
    };

    render(
      <MemoryRouter>
        <AboutCard {...data} />
      </MemoryRouter>
    );

    const title = screen.getByText("test title");
    const desc = screen.getByText("test description");
    const img = screen.getByAltText("denver");

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
