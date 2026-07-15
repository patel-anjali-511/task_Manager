import { useEffect, useState } from "react";
import api from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const url = filter ? `/?status=${filter}` : "/";

      const res = await api.get(url);

      setTasks(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const addTask = async (task) => {
    try {
      await api.post("/", task);
      fetchTasks();
    } catch (err) {
      alert("Unable to create task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const updateTaskStatus = async (id, status) => {
    try {
      await api.put(`/${id}`, { status });
      fetchTasks();
    } catch (err) {
      alert("Update failed");
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await api.put(`/${id}`, updatedData);
      fetchTasks();
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="container">
      <h1>Personal Task Manager</h1>
      <TaskForm addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        loading={loading}
        error={error}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
        updateTask={updateTask}
      />
    </div>
  );                    
}

export default App;

  