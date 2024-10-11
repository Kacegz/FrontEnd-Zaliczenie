import { fireEvent, render, screen } from "@testing-library/react";
import Tasks from "../src/Tasks/Tasks";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";

describe("Tasks", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, { initialIndex: 1 });
    render(<RouterProvider router={router} />);
  });
  it("Renders three tasks", async () => {
    const div = screen.getByTestId("main");
    const tasks = div.querySelectorAll(".task");
    expect(tasks.length).toBe(3);
  });
  it("Deletes first task", async () => {
    const deleteButtons = screen.getAllByText("delete");
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText("Buy groceries")).not.toBeInTheDocument();
  });
  it("Completed checkbox works", async () => {
    const checkboxInputs = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxInputs[0]);
    expect(checkboxInputs[0]).toBeChecked();
  });
});
describe("Modal", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, { initialIndex: 1 });
    render(<RouterProvider router={router} />);
  });
  it("Not visible by default", async () => {
    const dialog = document.querySelector("#dialog");
    expect(dialog).not.toBeInTheDocument();
  });
  it("Opens modal when Add task button is clicked", async () => {
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const dialog = document.querySelector("#dialog");
    expect(dialog).toBeInTheDocument();
  });
  it("Closes modal when cancel button is clicked", async () => {
    const openModalButton = screen.getByText("Add task");
    fireEvent.click(openModalButton);
    const dialog = document.querySelector("#dialog");
    expect(dialog).toBeInTheDocument();
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(dialog).not.toBeInTheDocument();
  });
  it("Opens modal and adds new task", async () => {
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
