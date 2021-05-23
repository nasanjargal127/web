import React from "react"
// import Menu from "../Menu"
import Page from "../Page"
import css from "./style.module.css"
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className={css.App}>
      
      <Route path="/" component={Page}/>
    </div>
  );
}

export default App;
