import {fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body";
import RES_MOCK_DATA from "../../mocks/restaruantMochData.json";
import {act} from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MOCK_DATA);
    },
  });
});

test("should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforSearch = screen.getAllByTestId("resCard")
  expect(cardBeforSearch.length).toBe(20)

  const searchBtn = screen.getByTestId("searchBtn")
  const serachInput = screen.getByTestId("serchInput")
  fireEvent.change(serachInput, {target : {value: "th"}})
  fireEvent.click(searchBtn);

  const cardAfterSerach = screen.getAllByTestId("resCard")
  expect(cardAfterSerach.length).toBe(4)
});
