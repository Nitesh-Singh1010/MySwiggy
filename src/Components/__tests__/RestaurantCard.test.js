import { render, screen } from "@testing-library/react";
import RestaurantCard, { promotedRestaurantCard } from "../RestaurantCard";
import { MOCK_DATA } from "../../mocks/RestaurantCardMockData";
import "@testing-library/jest-dom";
it("should render restaurant card component with props data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);
  const name = screen.getByText("Chaayos Chai+Snacks=Relax");
  expect(name).toBeInTheDocument();
});

it("should render restaurant card component with promoted label", () => {
  render(<RestaurantCard {...MOCK_DATA} />);
  const isPromoted = screen.getAllByLabelText("Promoted");
  expect(isPromoted).toBeInTheDocument();
});
