import React from "react";

// custom components
import BoardsListTemplate from "./BoardsListTemplate";
import BoardsListLogo from "./components/BoardsListLogo";
import AllBoards from "./components/AllBoards";
import HideSideBar from "./components/HideSideBar";

export default function BoardsList() {
  return (
    <>
      <BoardsListTemplate
        BoardsListLogo={<BoardsListLogo />}
        AllBoards={<AllBoards />}
        HideSideBar={<HideSideBar />}
      />
    </>
  );
}
