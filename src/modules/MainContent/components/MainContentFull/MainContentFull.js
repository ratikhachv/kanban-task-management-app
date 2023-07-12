import React from "react";

// css
import "./MainContentFull.css";

//components
import NewColumn from "./components/NewColumn";
import Column from "./components/Column";
import TaskStatus from "./components/columnComponents/TaskStatus";
import Task from "./components/columnComponents/Task";
import SubtaskItem from "../../../../modals/TaskDetailsModal/components/Subtasks/components/SubtaskItem";

export default function MainContentFull(props) {
  console.log(props.selectedBoard.columns[0].tasks);

  const checkSubtaskStatus = (subtasks) => {
    return subtasks.filter((el) => el.isCompleted).length;
  };
  return (
    <div className="mc-full__wrapper">
      {props.selectedBoard.columns.map((el) => {
        return (
          <Column
            key={el.name}
            status={
              <TaskStatus status={el.name} taskAmount={el.tasks.length} />
            }
            task={el.tasks.map((task) => {
              return (
                <Task
                  status={el.name}
                  key={task.title}
                  taskName={task.title}
                  toDoSubtask={checkSubtaskStatus(task.subtasks)}
                  totalSubtasks={task.subtasks.length}
                  description={task.description}
                  subtaskItem={task.subtasks.map((subtask) => {
                    return (
                      <SubtaskItem
                        key={subtask.title}
                        subtaskName={subtask.title}
                        checked={subtask.isCompleted}
                      />
                    );
                  })}
                />
              );
            })}
          />
        );
      })}
      {<NewColumn />}
    </div>
  );
}
