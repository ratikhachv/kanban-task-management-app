import React from "react";

// css
import "./ChangeTaskTemplate.css";

export default function ChangeTaskTemplate(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content__wrapper">
        {props.modalRole}
        {props.title}
        {props.addDescription}
        {props.subtasks}
        {props.status}
        {props.submitButton}
      </div>
    </div>
  );
}
