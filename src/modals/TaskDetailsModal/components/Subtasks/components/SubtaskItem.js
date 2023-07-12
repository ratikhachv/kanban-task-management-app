import React from "react";

// css
import "./SubtaskItem.css";

export default function SubtaskItem({ subtaskName, checked }) {

  return (
    <>
      <div className="subtask__wrapper">
        <input type="checkbox" name={subtaskName} className="checked" checked={checked}/>
        <label className={checked ? "checked-subtask" : null}  htmlFor={subtaskName}>
          {subtaskName}
        </label>
      </div>
    </>
  );
}
