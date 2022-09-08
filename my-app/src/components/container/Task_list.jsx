import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TasksComponent from '../pure/Tasks';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default Descriptions', false, LEVELS.NORMAL);
    return (
        <>
            <div>
                <h1>Your Taks:</h1>
            </div>
            <TasksComponent task={defaultTask}></TasksComponent>
        </>
    );
}

export default TaskListComponent;

