// integration testing

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { fetchMockData } from "../../mocks/fetchMockData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(fetchMockData);
    },
  });
});

it("should search restaurant list for Burger search input", async () => {
  await act(async () => (
    <BrowserRouter>
      render(
      <Body />)
    </BrowserRouter>
  ));

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});

it("should show top rated restaurants upon clicking", async () => {
  await act(async () => (
    <BrowserRouter>
      render(
      <Body />)
    </BrowserRouter>
  ));

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
  const resButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(resButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(13);
});
