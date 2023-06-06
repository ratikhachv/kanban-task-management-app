import React from "react";

// css
import "./SubtaskItem.css";

export default function SubtaskItem({ subtaskName, checked }) {

  return (
    <>
      <div className="subtask__wrapper">
        <input type="checkbox" name={subtaskName} className="checked" />
        <label className={checked && "checked-subtask"}  htmlFor={subtaskName}>
          {subtaskName}
        </label>
      </div>
    </>
  );
}
