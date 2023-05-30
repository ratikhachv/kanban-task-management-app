import React from "react";

// custom components
import BoardsListLogo from "./components/BoardsListLogo";
import AllBoards from "./components/AllBoards";
import HideSideBar from "./components/HideSideBar";

// css
import './BoardsListTemplate.css'

export default function BoardsListsTemplate() {
  return (
    <>
    <aside>
      <BoardsListLogo />
      <AllBoards />
      <HideSideBar />
    </aside>
    </>
    
  );
}
