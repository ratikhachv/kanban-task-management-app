// css
import "./TaskTemplate.css";

// custom hooks
import useModal from "../../../../../../customHooks/useModal";

// custom components
import TaskDetailsHeading from "../../../../../../modals/TaskDetailsModal/components/TaskDetailsHeading";
import TaskDescription from "../../../../../../modals/TaskDetailsModal/components/TaskDescription";
import Subtasks from "../../../../../../modals/TaskDetailsModal/components/Subtasks/Subtasks";
import CurrentStatus from "../../../../../../modals/modalGenericComponents/CurrentStatus";


export default function Task(props) {
  const [Modal, openModal] = useModal();

  return (
    <>
      <div className="task__wrapper" onClick={openModal}>
        <h4>{props.taskName}</h4>
        <p>
          {props.toDoSubtask} of {props.totalSubtasks} subtasks
        </p>
      </div>
      <Modal>
        <TaskDetailsHeading taskName={props.taskName} />
        <TaskDescription description={props.description} />
        <Subtasks
          toDoSubtask={props.toDoSubtask}
          totalSubtasks={props.totalSubtasks}
          subtaskItem={props.subtaskItem}
        />
        <CurrentStatus heading={"current status"} status={props.status}/>
      </Modal>
    </>
  );
}
