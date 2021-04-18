import React from "react"
import css from "./style.module.css"

const Title = (props) =>{
    return(
        <div className={css.Title}> <strong>{props.text}</strong></div>
    )
}
export default Title;