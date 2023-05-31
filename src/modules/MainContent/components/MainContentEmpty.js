import React from "react";

// components
import AddNewTaskBtn from "../../Header/components/AddNewTaskBtn";

// css
import "./MainContentEmpty.css";

export default function MainContentEmpty() {
  return (
    <div className="main-content-empty">
      <div>
        <p style={{marginBottom:"2rem"}}>This board is empty. Create a new column to get started.</p>
        <AddNewTaskBtn />
      </div>
    </div>
  );
}
