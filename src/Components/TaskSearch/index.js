import React, { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import './TaskSearch.css';
// import App from '../../App';

function TaskSearch() {

    const { searchValue, setSearchValue } = useContext(TaskContext);

    const onSearchValueChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    const deleteInput = () => {
        setSearchValue("");
    };

    return (
        <>
            <input
                className='TaskSearch'
                placeholder="Nombre de la tarea a filtrar"
                value={searchValue}
                onChange={onSearchValueChange}
            />

            {searchValue &&
                <button
                    className='btn-clear'
                    onClick={deleteInput} > X
                </button>
            }
        </>
 
    );

}

export { TaskSearch }; 