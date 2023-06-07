import React from "react";

// components
import Header from "../modules/Header/Header";
import BoardsList from "../modules/BoardsList/BoardsList";
import MainContent from "../modules/MainContent/MainContent";
import ChangeBoardModal from "../modals/ChangeBoardModal/ChangeBoardModal";
import DeleteModal from "../modals/DeleteModal/DeleteModal";

export default function AppLayout() {
  return (
    <>
      {/* <Header />
      <div style={{ display: "flex",}}>
        <BoardsList />
        <MainContent /> 
      </div> */}
      <DeleteModal/>
    </>
  );
}
