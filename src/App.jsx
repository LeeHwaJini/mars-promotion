import React from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Header from "components/common/Header";
import List from "components/common/List";

function App() {
  return (
    <div>
      <Header>진행 프로젝트</Header>
      <div className="prj-list-area">
        <List className="prj-side-list-area">프로젝트제목프로젝트제목프로젝트제목</List>
        <List className="prj-outsourcing-list-area">프로젝트제목프로젝트제목프로젝트제목</List>
      </div>
    </div>
  );
}

export default App;
