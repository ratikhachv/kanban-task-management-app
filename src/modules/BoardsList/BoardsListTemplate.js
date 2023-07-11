import React from "react";

// css
import "./BoardsListTemplate.css";
import ShowBoardsList from "./components/ShowBoardsList";

export default function BoardsListsTemplate(props) {
  console.log(props.showBoards);
  return (
    <>
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "2rem",
          transition: "0.1s",
          width: props.showBoards ? "230px" : "0px",
          minWidth: props.showBoards ? "230px" : "0px",
          overflow: "hidden",
        }}
      >
        <div>
          {props.BoardsListLogo}
          {props.AllBoards}
        </div>
        {props.HideSideBar}
      </aside>
      {props.ShowBoardList}
    </>
  );
}
