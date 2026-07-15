import { useState } from "react";

function TaskCard({ task, deleteTask, updateTaskStatus, updateTask }) {
  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate
      ? task.dueDate.substring(0, 10)
      : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveTask = () => {
    updateTask(task._id, formData);           
    setEdit(false);
  };

  return (
    <div className="task-card">

      {edit ? (
        <>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <button onClick={saveTask}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div className="task-header">
            <h2>{task.title}</h2>
            <span className={`priority ${task.priority}`}>
              {task.priority}
            </span>
          </div>

          <p>{task.description}</p>

          <p>
            <strong>Status:</strong>
          </p>

          <select
            value={task.status}
            onChange={(e) =>
              updateTaskStatus(task._id, e.target.value)
            }
          >
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <p>
            <strong>Due:</strong>{" "}
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No Date"}
          </p>

          <div className="buttons">
            <button onClick={() => setEdit(true)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default TaskCard;