import React from "react";

// custom components
import BoardsListTemplate from "./BoardsListTemplate";
import BoardsListLogo from "./components/BoardsListLogo";
import AllBoards from "./components/AllBoards";
import HideSideBar from "./components/HideSideBar";
import ShowBoardsList from "./components/ShowBoardsList";

// hooks
import { useState } from "react";

export default function BoardsList() {
  const [showBoards, setShowBoards] = useState(true);
  console.log(showBoards);

  return (
    <>
      <BoardsListTemplate
        showBoards={showBoards}
        BoardsListLogo={<BoardsListLogo />}
        AllBoards={<AllBoards boardQuantity="3" />}
        HideSideBar={<HideSideBar setShowBoards={setShowBoards} />}
        ShowBoardList={<ShowBoardsList setShowBoards={setShowBoards} />}
      />
    </>
  );
}
