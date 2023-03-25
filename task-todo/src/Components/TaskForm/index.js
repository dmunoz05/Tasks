import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import './TaskForm.css';

function TaskForm() {

    const [newTaskValue, setNewTaskValue] = useState();

    const {
        addTask,
        setOpenModal
    } = useContext(TaskContext);

    const onCancel = (() => {
        setOpenModal(false);
    });

    const onSubmit = ((event) => {
        event.preventDefault();
        addTask(newTaskValue);
    });

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <textarea
                    value={newTaskValue}
                    onChange={onChange}
                    placeholder="Ingrese el texto"
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        type="button"
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="TodoForm-button TodoForm-button--add"
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </>
    );
};
 
export { TaskForm };