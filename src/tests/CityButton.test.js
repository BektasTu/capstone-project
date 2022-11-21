import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CityButtons from "../components/button/CityButtons";

const dataItems = [
  {
    id: 1,
    title: "London",
  },
  {
    id: 2,
    title: "Moscow",
  },
];

test("renders the prop array correctly", () => {
  render(<CityButtons cities={dataItems} />);

  const firstTitle = screen.getByText(/London/i);
  const secondTitle = screen.getByText(/Istanbul/i);
  expect(firstTitle).toBeInTheDocument();
  expect(secondTitle).toBeInTheDocument();
});
