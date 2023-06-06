import React from "react";

// css
import "./Subtasks.css";

// components
import SubtaskAmount from "./components/SubtaskAmount";
import SubtaskItem from "./components/SubtaskItem";

export default function Subtasks() {
  return (
    <div className="subtasks__wrapper">
      <SubtaskAmount checkedSubtasks={2} totalSubtasks={3} />
      <div className="subtask-items__wrapper">
        <SubtaskItem subtaskName={"ragaca ragaca ragaca"} checked={true} />
        <SubtaskItem subtaskName={"ragaca ragaca ragaca"} checked={true} />
        <SubtaskItem subtaskName={"ragaca ragaca ragaca"} />
      </div>
    </div>
  );
}
