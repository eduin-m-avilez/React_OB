
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';



const TasksComponent = ({task}) => {

    return (
        <div>
            <h2> Name: { task.name }</h2>
            <h3> Description: { task.description }</h3>
            <h4> Levels: { task.level }</h4>
            <h5> This task is: { task.completed ? 'Completed' : 'Pending' }</h5>
        </div>
    );
};


TasksComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};


export default TasksComponent;



