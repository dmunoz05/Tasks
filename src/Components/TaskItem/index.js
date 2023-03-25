import React from "react";
import './TaskItem.css';

function TaskItem(props) {
   
  return (
    <li className="TaskItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        <button onClick={props.onCompleted} className="Icon-button-check">
          ✔
        </button>
      </span>
      <p className={`TaskItem-p ${props.completed && 'TaskItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <button onClick={props.onDeleted} className="Icon-button-delete">
          X
        </button>
      </span>
    </li> 
  );
}

export { TaskItem };