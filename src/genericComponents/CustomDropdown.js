import React from "react";

// css
import "./CustomDropdown.css";

import useModal from "../customHooks/useModal";

import ModalRole from "../modals/modalGenericComponents/ModalRole";
import Textarea from "../modals/modalGenericComponents/Textarea";
import AddNewSect from "../modals/modalGenericComponents/ChangeSubtasks/AddNewSect";
import Button from "./Button";
import CurrentStatus from "../modals/modalGenericComponents/CurrentStatus";

export default function CustomDropdown({
  item,
  isClicked,
  handleDelete,
  description,
  taskName,
  boardName
}) {
  const [Modal, openModal] = useModal();

  return (
    <>
      <div
        className="custom-dropdown__wrapper"
        style={{
          display: isClicked ? "flex" : "none",
          right: item == "task" ? "0px" : "5px",
          top: item == "task" ? "30px" : "50px",
        }}
      >
        <p id="edit-item" onClick={openModal}>
          Edit {item}
        </p>
        <p id="delete-item" onClick={handleDelete}>
          Delete {item}
        </p>
      </div>
      {item == "board" ? (
        <Modal>
          <ModalRole modalRole={"Edit Board"} />
          <Textarea labelText={"Board Name"} description={boardName} />
          <AddNewSect heading={"Board Columns"} text={"+ Add New Column"} />
          <Button text={"Save Changes"} />
        </Modal>
      ) : (
        <Modal>
          <ModalRole modalRole={"Edit Task"} />
          <Textarea labelText={"Title"} description={taskName} />
          <Textarea labelText={"Description"} description={description} />
          <AddNewSect heading={"Subtasks"} text={"+ Add New Subtask"} />
          <CurrentStatus heading="status"/>
          <Button text={"Save Changes"} />
        </Modal>
      )}
    </>
  );
}
