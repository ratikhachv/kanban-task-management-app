import React from "react";

//
import MainContentFullTemplate from "./MainContentFullTemplate";
import NewColumn from "./components/NewColumn";
import Column from "./components/Column";
import TaskStatus from "./components/columnComponents/TaskStatus";
import Task from "./components/columnComponents/Task";

export default function MainContentFull() {
  return (
    <MainContentFullTemplate
      column={
        <Column
          status={<TaskStatus status="doing" taskAmount={3} />}
          task={
            <Task
              taskName="task Name"
              toDoSubtask={2}
              totalSubtasks={3}
              description="guten tasken"
              subtaskName="Subtask Name"
              checked= {true}
            />
          }
        />
      }
      newColumn={<NewColumn />}
    />
  );
}
