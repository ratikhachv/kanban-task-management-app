import React from "react";

import './ColumnTemplate.css'

export default function ColumnTemplate(props) {
  return (
    <div className="column__wrapper">
      {props.status}
      {props.task}
      {props.task}
      {props.task}
    </div>
  );
}
