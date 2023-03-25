import React from "react";
import './CreateTaskButton.css';


function CreateTaskButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);                   
    }
 
    return (
        <button onClick={onClickButton} className="CreateTaskButton">+</button>
    )
}

export { CreateTaskButton };