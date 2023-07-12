import React from "react";

// css
import "./Subtasks.css";

// components
import SubtaskAmount from "./components/SubtaskAmount";


export default function Subtasks(props) {
  return (
    <div className="subtasks__wrapper">
      <SubtaskAmount toDoSubtask={props.toDoSubtask} totalSubtasks={props.toDoSubtask} />
      <div className="subtask-items__wrapper">
        {props.subtaskItem}
      </div>
    </div>
  );
}
