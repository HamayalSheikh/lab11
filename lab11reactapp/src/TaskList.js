import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, completeTask, removeTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
}

export default TaskList;
