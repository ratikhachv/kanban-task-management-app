import React from "react";

// components
import AddNewTaskBtn from "../../Header/components/AddNewTaskBtn";

// css
import "./MainContentEmpty.css";
import useModal from "../../../customHooks/useModal";

export default function MainContentEmpty() {

  const[Modal, openModal] = useModal()

  return (
    <div className="main-content-empty">
      <div>
        <p style={{marginBottom:"2rem"}}>This board is empty. Create a new column to get started.</p>
        <AddNewTaskBtn btnText={"+ Add New Column"} handleClick={openModal}/>
      </div>
    </div>
  );
}
