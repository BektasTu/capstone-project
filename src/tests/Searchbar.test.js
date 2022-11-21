import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import SearchBar from "../components/searchbar/SearchBar";

describe("input field requires valid city name", () => {
  it("should accept regular cities", async () => {
    render(
      <form data-testid="form">
        <SearchBar />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByRole("textbox");
    await userEvent.type(inputfield, "berlin");
    expect(form).toBeValid();
  });

  it("should not accept empty city names", async () => {
    render(
      <form data-testid="form">
        <SearchBar />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByRole("textbox");
    await userEvent.type(inputfield, "  ");
    expect(form).not.toBeValid();
  });

  it("should require an input", async () => {
    render(
      <form data-testid="form">
        <SearchBar />
      </form>
    );
    const inputfield = screen.getByRole("textbox");
    expect(inputfield).toBeRequired();
  });

  it("should not allow input of city names with more than 30 letters", async () => {
    render(
      <form data-testid="form">
        <SearchBar />
      </form>
    );
    const inputfield = screen.getByRole("textbox");

    await userEvent.type(inputfield, "Nuevo San Juan Parangaricutiro");
    expect(inputfield.value).toHaveLength(30);
  });
});
