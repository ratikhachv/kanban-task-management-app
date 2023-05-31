import React from "react";

// css
import "./CreateBoardItem.css";

// img
import boardIcon from "../../../assets/icon-board.svg";

export default function CreateBoardItem() {
  return (
      <p className="create-board-item">
        <img src={boardIcon} alt="" /> + Create New Board
      </p>
  );
}
