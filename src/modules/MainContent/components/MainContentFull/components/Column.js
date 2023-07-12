import React from "react";

import './Column.css'

export default function ColumnTemplate(props) {
  return (
    <div className="column__wrapper">
      {props.status}
      {props.task}
    </div>
  );
}
