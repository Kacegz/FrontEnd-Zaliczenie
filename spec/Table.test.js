import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";

describe("Table", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, { initialEntries: ["/table"] });
    render(<RouterProvider router={router} />);
  });
  it("Renders table", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  it("Should render 2 first tasks without the third", () => {
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.queryByText("Do laundry")).not.toBeInTheDocument();
  });
});
