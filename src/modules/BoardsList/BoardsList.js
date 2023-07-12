import React from "react";

// custom components
import BoardsListTemplate from "./BoardsListTemplate";
import BoardsListLogo from "./components/BoardsListLogo";
import AllBoards from "./components/AllBoards";
import HideSideBar from "./components/HideSideBar";
import ShowBoardsList from "./components/ShowBoardsList";

// hooks
import { useState } from "react";
import { useContext } from "react";
import { BoardsData } from "../../store/boards-data";

export default function BoardsList() {
  const [showBoards, setShowBoards] = useState(true);
  const boardsData = useContext(BoardsData);
  console.log(boardsData);

  return (
    <>
      <BoardsListTemplate
        showBoards={showBoards}
        BoardsListLogo={<BoardsListLogo />}
        AllBoards={
          <AllBoards
            boardQuantity={boardsData.boards.length}
            boards={boardsData.boards}
            selectBoard={boardsData.setSelectedBoardName}
          />
        }
        HideSideBar={<HideSideBar setShowBoards={setShowBoards} />}
        ShowBoardList={<ShowBoardsList setShowBoards={setShowBoards} />}
      />
    </>
  );
}
