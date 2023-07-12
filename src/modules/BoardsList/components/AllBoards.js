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
      {props.boards &&
        props.boards.map((el) => (
          <AllBoardsItem
            boardName={el.name}
            key={el.name}
            selectBoard={props.selectBoard}
          />
        ))}
      <CreateBoardItem />
    </div>
  );
}
