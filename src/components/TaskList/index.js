import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className="task" key={task.id}>
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Assignee: {task.assignee}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <p>Start Date: {task.startDate}</p>
          {task.endDate && <p>End Date: {task.endDate}</p>}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
