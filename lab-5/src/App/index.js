import React from "react"
import Menu from "../Menu"
import Page from "../Page"
import css from "./style.module.css"


function App() {
  return (
    <div className={css.App}>
      <Menu />
      <Page />
    </div>
  );
}

export default App;
