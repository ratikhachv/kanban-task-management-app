import React from "react";

// css
import "./BoardsListTemplate.css";

export default function BoardsListsTemplate(props) {
  return (
    <>
      <aside style={{display:'flex', flexDirection:"column", justifyContent:"space-between", paddingBottom:"2rem"}}>
        <div >
          {props.BoardsListLogo}
          {props.AllBoards}
        </div>
        {props.HideSideBar}
      </aside>
    </>
  );
}
