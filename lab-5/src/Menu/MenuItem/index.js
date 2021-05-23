import React from 'react'
import css from "./style.module.css"
import {NavLink} from 'react-router-dom'

const MenuItem = (props) => {
    return(
        <div > 
            <li className={css.MenuItem}>
                <NavLink to={props.link}> {props.children}</NavLink>
                
                </li>
        </div>
    )
}

export default MenuItem;