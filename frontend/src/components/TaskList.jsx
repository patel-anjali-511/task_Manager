import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, loading, error, deleteTask, updateTaskStatus, updateTask }) => {
  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!tasks || tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard 
          key={task._id} 
          task={task} 
          deleteTask={deleteTask} 
          updateTaskStatus={updateTaskStatus} 
          updateTask={updateTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;