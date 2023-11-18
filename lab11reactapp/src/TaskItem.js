import React from 'react';

function TaskItem({ task, removeTask }) {
    const handleRemove = () => {
        removeTask(task.id);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <p style={{ flex: 1, marginRight: '10px' }}>{task.description}</p>
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
}

export default TaskItem;



