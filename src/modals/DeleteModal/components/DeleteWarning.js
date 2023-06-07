import React from "react";

import "./DeleteWarning.css";

export default function DeleteWarning({ typeToDelete, nameToDelete }) {
  return (
    <>
      {typeToDelete === "board" ? (
        <p className="warning">
          Are you sure you want to delete the ‘{nameToDelete}’ {typeToDelete}?
          This action wil l remove all columns and tasks and cannot be reversed.
        </p>
      ) : (
        <p className="warning">
          Are you sure you want to delete the ‘{nameToDelete}’ {typeToDelete}{" "}
          and its subtasks? This action cannot be reversed.
        </p>
      )}
    </>
  );
}
