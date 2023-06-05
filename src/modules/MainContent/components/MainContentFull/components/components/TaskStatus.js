import React from "react";

// css
import "./TaskStatus.css";

export default function TaskStatus(props) {
  const className = "dot " + props.status;

  return (
    <div className="task-status__wrapper">
      <div className={className}></div>
      <p>
        {props.status} ({props.taskAmount})
      </p>
    </div>
  );
}
