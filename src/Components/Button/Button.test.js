import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Button", () => {
  it("should render the button", () => {
    render (
      <MemoryRouter>
        <Button />
      </MemoryRouter>
    )
    const button = screen.getByText("Return to top");
    expect(button).toBeInTheDocument();
  })
})