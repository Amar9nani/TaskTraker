import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('P0');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      description,
      assignee,
      priority,
      startDate: new Date().toISOString(),
      status: 'Pending'
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setAssignee('');
    setPriority('P0');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
