import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";
describe("App", () => {
  it("Loads and displays header", async () => {
    render(<App />);
    const header = screen.getByText("ToDo App");
    expect(header).toBeInTheDocument();
  });
  it("Renders three tasks", async () => {
    render(<App />);
    const div = screen.getByTestId("main");
    const tasks = div.querySelectorAll(".task");
    expect(tasks.length).toBe(3);
  });
  it("Deletes first task", async () => {
    render(<App />);
    const deleteButtons = screen.getAllByText("delete");
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText("Buy groceries")).not.toBeInTheDocument();
  });
  it("Completed checkbox works", async () => {
    render(<App />);
    const checkboxInputs = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxInputs[0]);
    expect(checkboxInputs[0]).toBeChecked();
  });
});
describe("Modal", () => {
  xit("Adds task", async () => {
    render(<App />);
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const inputNode1 = screen.getByLabelText("Enter the name for a new task");

    fireEvent.change(inputNode1, { target: { value: "New task" } });
    const addTaskButton = screen.getByText("Add");
    fireEvent.click(addTaskButton);
    const tasks = screen.getByTestId("main");
    const first = tasks.querySelectorAll(".task");
    expect(first.length).toBe(4);
  });
});
