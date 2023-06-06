import React from "react";

// components
import TaskDetailsTemplate from "./TaskDetailsTemplate";
import TaskDetailsHeading from "./components/TaskDetailsHeading";
import TaskDescription from "./components/TaskDescription";
import Subtasks from "./components/Subtasks/Subtasks";
import CurrentStatus from "../modalGenericComponents/CurrentStatus";

export default function TaskDetailsModal() {
  return (
    <TaskDetailsTemplate
      taskHeading={<TaskDetailsHeading taskName="aqet iqit, ragac rugac"/>}
      taskDescription={<TaskDescription description={"es aris es aris esesesesaris lalalalalala"}/>}
      subtasks={<Subtasks />}
      currentStatus={<CurrentStatus heading={"Current Status"}/>}
    />
  );
}
