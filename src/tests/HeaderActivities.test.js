import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeaderActivities from "../components/header/HeaderActivities";

test("render Your Activities from Header", () => {
  render(<HeaderActivities />);
  const headerElement = screen.getByText(/Your Activities/i);
  expect(headerElement).toBeInTheDocument();
});
