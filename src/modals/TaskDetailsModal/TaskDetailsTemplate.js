import React from "react";

// css
import "./TaskDetailsTemplate.css";

export default function TaskDetailsTemplate(props) {
  return (
    <div className="modal-backdrop" onClick={props.closeModal}>
      <div className="modal-content__wrapper">
        {props.taskHeading}
        {props.taskDescription}
        {props.subtasks}
        {props.currentStatus}
      </div>
    </div>
  );
}
