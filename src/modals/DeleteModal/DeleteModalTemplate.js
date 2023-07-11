import React from "react";

// css
import "./DeleteModalTemplate.css";

export default function DeleteModalTemplate(props) {
  return (
    <div className="modal-backdrop" onClick={props.closeModal}>
      <div className="delete-modal-content">
        {props.heading}
        {props.warning}
        <div className="btns">
          {props.deleteButton}
          {props.cancelButton}
        </div>
      </div>
    </div>
  );
}
