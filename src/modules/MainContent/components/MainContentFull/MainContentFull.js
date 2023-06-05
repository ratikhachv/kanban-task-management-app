import React from "react";

// 
import MainContentFullTemplate from "./MainContentFullTemplate";
import NewColumn from "./components/NewColumn";
import Column from "./components/Column";

export default function MainContentFull() {

  return <MainContentFullTemplate column={<Column/>} newColumn={<NewColumn/>} />;
}
