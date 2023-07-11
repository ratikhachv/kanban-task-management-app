import React, { useState } from "react";

// imgs
import elipsis from "../../../assets/icon-vertical-ellipsis.svg";

// css
import "./TaskDetailsHeading.css";

// components
import CustomDropdown from "../../../genericComponents/CustomDropdown";

export default function TaskDetailsHeading(props) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="task-heading__wrapper">
      <p>{props.taskName}</p>
      <img
        src={elipsis}
        alt=""
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      />
      <CustomDropdown item={"task"} isClicked={isClicked} />
    </div>
  );
}
