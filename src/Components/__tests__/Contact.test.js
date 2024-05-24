import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe is only for grouping test cases
describe("Conntact page test cases", () => {
  test("should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should have a submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should have input name", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("should have 2 inputs boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
