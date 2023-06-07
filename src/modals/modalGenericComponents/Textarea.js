import React from "react";

// css
import "./Textarea.css";

export default function Textarea({labelText, description}) {

  return (
    <div className="description__wrapper">
      <label htmlFor="description">{labelText}</label>
      <textarea
        className={labelText.toLowerCase() === "Description".toLowerCase() ? "description" :""}
        type="text"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        value={description}
        id="description"
      />
    </div>
  );
}
