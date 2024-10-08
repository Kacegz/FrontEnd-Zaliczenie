import { addNewTask, changeTaskStatus, deleteTask } from "../src/utils";
describe("Utils", () => {
  it("Logic for creating tasks works", async () => {
    const newtask = addNewTask(4, "New Task", false);
    expect(newtask.id).toBe(4);
    expect(newtask.name).toBe("New Task");
    expect(newtask.completed).toBe(false);
  });
  it("Adding task throws an error when not providing a name", async () => {
    expect(() => {
      addNewTask(4, "", false);
    }).toThrowError("Name is required");
  });
  it("Logic for changing status works", async () => {
    let tasks = [
      { id: 1, name: "Buy groceries", completed: false },
      { id: 2, name: "Walk the dog", completed: false },
      { id: 3, name: "Do laundry", completed: true },
    ];
    const newtasks = changeTaskStatus(tasks, 1);
    expect(newtasks[0].completed).toBe(true);
  });
  it("Logic for deleting task works", async () => {
    let tasks = [
      { id: 1, name: "Buy groceries", completed: false },
      { id: 2, name: "Walk the dog", completed: false },
      { id: 3, name: "Do laundry", completed: true },
    ];
    const newtasks = deleteTask(tasks, 1);
    expect(newtasks.length).toBe(2);
  });
});
