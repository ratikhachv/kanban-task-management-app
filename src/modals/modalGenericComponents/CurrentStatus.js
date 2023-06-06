import React from "react";

// css
import "./CurrentStatus.css"

export default function CurrentStatus(props) {
  return (
    <div className="current-status__wrapper">
      <h4>{props.heading}</h4>
      <select name="" id="">
        <option value="todo" defaultChecked>todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
    </div>
  );
}
