import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
describe("App", () => {
  it("Renders and displays header", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByText("ToDo App");
    expect(header).toBeInTheDocument();
  });
});
