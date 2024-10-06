import { getByText, render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("App", () => {
  it("loads and displays greeting", async () => {
    render(<App />);
    const header = screen.getByText("ToDo App");
    expect(header).toBeInTheDocument();
  });
});
