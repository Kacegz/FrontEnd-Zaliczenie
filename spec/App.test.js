import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";
describe("App", () => {
  it("Renders and displays header with buttons", async () => {
    const router = createMemoryRouter(routes, { initialIndex: 1 });
    render(<RouterProvider router={router} />);
    const header = screen.getByText("ToDo App");
    expect(header).toBeInTheDocument();
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
  });
  it("Navigation works", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/gallery"] });
    render(<RouterProvider router={router} />);

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[2]);

    expect(screen.getByText("Task")).toBeInTheDocument();

    fireEvent.click(buttons[0]);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
  });
  it("landing on a bad page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/asd"],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
