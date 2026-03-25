import React from "react";
import { render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import Hero from "../landingpage/home/Hero";

//test suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");// for pass
    //expect(heroImage).toHaveAttribute("src", "assets/homeHero.png"); // for fail
  });
});