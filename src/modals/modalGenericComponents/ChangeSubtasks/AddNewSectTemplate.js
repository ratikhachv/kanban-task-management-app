import React from "react";

// css
import './AddNewSectTemplate.css'

export default function AddNewSectTemplate(props) {
  return (
    <div className="add-new-sect__wrapper">
      {props.heading}
      <div className="items">{props.item}{props.item}</div>
      {props.button}
    </div>
  );
}
