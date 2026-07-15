import { useState } from "react";

function TaskForm({ addTask }) {

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "low",
    status: "todo",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title) {
      return alert("Title is required");
    }

    addTask(task);

    setTask({
      title: "",
      description: "",
      priority: "low",
      status: "todo",
      dueDate: "",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;