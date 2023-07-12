import React, { useRef } from "react";

// css
import "./CurrentStatus.css"

export default function CurrentStatus(props) {
  const selectRef = useRef(null);

  
  return (
    <div className="current-status__wrapper">
      <h4>{props.heading}</h4>
      <select  ref={selectRef} disabled={props.heading == "current status" ? true : false}>
      {console.log(selectRef)}
        <option value="todo" >todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
      
    </div>
  );
}
