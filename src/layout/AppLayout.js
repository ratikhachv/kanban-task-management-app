// components
import Header from "../modules/Header/Header";
import BoardsList from "../modules/BoardsList/BoardsList";
import MainContent from "../modules/MainContent/MainContent";

// context
import { BoardsData } from "../store/boards-data";

// hooks
import { useContext, useState } from "react";

// data from json
const info = require("../data/data.json");

export default function AppLayout() {
  const [selectedBoardName, setSelectedBoardName] = useState("Platform Launch");
  const [boardsData, setBoardsData] = useState(info)

  const selectedBoard = boardsData.boards.find(el => el.name === selectedBoardName)

  console.log(selectedBoard);
  return (
    <>
      <BoardsData.Provider value={{...boardsData, setSelectedBoardName, setBoardsData, selectedBoardName}}>
        <Header />
        <div style={{ display: "flex" }}>
          <BoardsList />
          <MainContent selectedBoard={selectedBoard}/>
        </div>
      </BoardsData.Provider>
    </>
  );
}
