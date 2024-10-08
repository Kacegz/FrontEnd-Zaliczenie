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
  it("Not visible by default", async () => {
    render(<App />);
    const dialog = document.querySelector("#dialog");
    expect(dialog).not.toBeInTheDocument();
  });
  it("Opens modal when Add task button is clicked", async () => {
    render(<App />);
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const dialog = document.querySelector("#dialog");
    expect(dialog).toBeInTheDocument();
  });
  it("Closes modal when cancel button is clicked", async () => {
    render(<App />);
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const dialog = document.querySelector("#dialog");
    expect(dialog).toBeInTheDocument();
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(dialog).not.toBeInTheDocument();
  });
  it("Opens modal and adds new task", async () => {
    render(<App />);
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const dialog = document.querySelector("#dialog");
    expect(dialog).toBeInTheDocument();
    const inputNode1 = screen.getByLabelText("Enter the name for a new task");
    fireEvent.change(inputNode1, { target: { value: "New task" } });
    const addTaskButton = screen.getByText("Add");
    fireEvent.click(addTaskButton);
    const main = screen.getByTestId("main");
    const tasks = main.querySelectorAll(".task");
    expect(tasks.length).toBe(4);
    expect(tasks[3].querySelector("span").textContent).toBe("New task");
  });
});
