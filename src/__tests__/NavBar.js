import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

const navList = ["Features", "Coolers", "Almiras", "Accessories", "Contact Us"];
jest.mock("../utils/themeProvider", () => ({
  useTheme: () => ({
    mode: "light",
    hanldeModeChange: jest.fn(),
  }),
}));
describe("NavBar", () => {
  test("renders NavBar component", () => {
    render(<NavBar navList={navList} />);
    // Test the presence of the logo
    const logo = screen.getByText("Logo");
    expect(logo).toBeInTheDocument();
  });
  // Test the presence of the theme switch
  test("Test the presence of the theme switch", () => {
    render(<NavBar navList={navList} />);
    const themeSwitch = screen.getByText(/mode/i);
    expect(themeSwitch).toBeInTheDocument();
  });

  test("Test the presence of each navigation link", () => {
    // Test the presence of each navigation link
    render(<NavBar navList={navList} />);
    navList.forEach((item) => {
      const navLinks = screen.getByText(item);
      expect(navLinks).toBeInTheDocument(); // Assuming there are 5 items in navList
    });
  });
  test("Theme switch changes the value of mode", async () => {
    render(<NavBar navList={navList} />);
    const themeSwitch = screen.getByTestId("checkbox-element");
    expect(themeSwitch).toBeInTheDocument();
  });
});

