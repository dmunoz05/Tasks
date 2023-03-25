import React, { useContext } from 'react';
import { TaskContext } from '../Components/TaskContext';
import { TaskCounter } from '../Components/TaskCounter';
import { TaskSearch } from '../Components/TaskSearch';
import { TaskList } from '../Components/TaskList';
import { TaskItem } from '../Components/TaskItem';
import { TaskForm } from '../Components/TaskForm';
import { CreateTaskButton } from '../Components/CreateTaskButton';
import { Modal } from '../Components/Modal';

function AppUI() {

    const {
        loading,
        error,
        searchedTasks,
        completeTask,
        deleteTasks,
        openModal,
        setOpenModal,
    } = useContext(TaskContext);

    return (
        <React.Fragment>
            <TaskCounter />
            <TaskSearch />

            <TaskList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTasks.length) && <p>Crea tu primer tarea</p>}

                {searchedTasks.map(task => (
                    <TaskItem
                        key={task.text}
                        text={task.text}
                        completed={task.completed}
                        onCompleted={() => completeTask(task.text)}
                        onDeleted={() => deleteTasks(task.text)}
                    />
                ))}

            </TaskList>
 
            {!!openModal && (
                <Modal>
                   <TaskForm/>
                </Modal>
            )}

            <CreateTaskButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };