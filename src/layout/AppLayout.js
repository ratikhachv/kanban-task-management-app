import React from "react";
import Header from "../modules/Header/Header";
import BoardsList from "../modules/BoardsList/BoardsList";

export default function AppLayout() {
  return (
    <>
      <Header />
      <BoardsList />
    </>
  );
}
