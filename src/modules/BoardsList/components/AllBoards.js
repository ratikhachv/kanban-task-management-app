import React from "react";

// css
import "./AllBoards.css";

//components
import AllBoardsItem from "./AllBoardsItem";
import CreateBoardItem from "./CreateBoardItem";

export default function AllBoards(props) {
  return (
    <div className="all-boards__wrapper">
      <div className="all-boards__heading__wrapper">
        <h6>ALL BOARDS ({props.boardQuantity})</h6>
      </div>
      <AllBoardsItem boardName={"Platform Lausdasdasdasd asdanch"} />
      <AllBoardsItem boardName={"Platform Launch"} />
      <CreateBoardItem />
    </div>
  );
}
