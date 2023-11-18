import React, { useState } from 'react';

function AddTask({ addTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.random(),
            description: newTask,
        };
        addTask(task);
        setNewTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
