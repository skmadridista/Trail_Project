import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/NavBar", () => () => (
  <div data-testid="nav-bar-mock" />
));
jest.mock("../components/CoolerListing", () => () => (
  <div data-testid="cooler-listing-mock" />
));
jest.mock("../components/CarouselComponent", () => () => (
  <div data-testid="carousel-mock" />
));
jest.mock("../utils/themeProvider", () => ({
  useTheme: () => ({ mode: "light" }),
}));


describe("App", () => {

  test("renders child components", () => {

    render(<App />);
    const navBarMock =screen.getByTestId("nav-bar-mock");
    const carouselMock =screen.getByTestId("carousel-mock");
    const coolerListingMock =screen.getByTestId("cooler-listing-mock");

    expect(navBarMock).toBeInTheDocument();
    expect(carouselMock).toBeInTheDocument();
    expect(coolerListingMock).toBeInTheDocument();

  });
});
