import React, { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css';

function TaskCounter(){   

    const {totalTask, completedTask} = useContext(TaskContext);

    return(
        <h2 className='TaskCounter'> Has completado {completedTask} de {totalTask} Tareas</h2>
    )
}
 
export { TaskCounter };