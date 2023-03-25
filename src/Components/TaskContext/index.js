import React, { useEffect, useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props) {

    const {
        item: task,
        saveItem: saveTask,
        loading,
        error,
    } = useLocalStorage('TASK_V1', []);

    const [searchValue, setSearchValue] = useState('');

    const [openModal, setOpenModal] = useState(false);

    const completedTask = task.filter(tasks => !!tasks.completed).length;

    const totalTask = task.length;

    let searchedTasks = [];

    if (!searchValue.length >= 1) {
        searchedTasks = task;
    } else {
        searchedTasks = task.filter(task => {
            const taskText = task.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return taskText.includes(searchText);
        });
    }

    const addTask = (text) => {        
        const newTasks = [...task];
        newTasks.push({
            completed: false,
            text,
        })
        saveTask(newTasks);
    }

    const completeTask = (text) => {
        const taskIndex = task.findIndex(task => task.text === text);
        const newTasks = [...task];
        newTasks[taskIndex].completed = true;
        saveTask(newTasks);
    }

    const deleteTasks = (text) => {
        const taskIndex = task.findIndex(task => task.text === text);
        const newTasks = [...task];
        newTasks.splice(taskIndex, 1);
        saveTask(newTasks);
    }

    

    useEffect(() => {
        
    }, [totalTask]);
    


    return (
        <TaskContext.Provider value={{
            loading,
            error,
            totalTask,
            completedTask,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTasks,
            addTask,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TaskContext.Provider>
    );
} 

export { TaskProvider, TaskContext };