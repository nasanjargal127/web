import React from 'react'
import MenuItem from './MenuItem'
import Title from '../Title'
import css from './style.module.css'
import HamburgerMenu from '../HamburgerMenu'
// Menu hesgiig gargah component
const Menu = (props) => {
    return(
        <div className={css.title}>
            <Title text="MY REACT WEBSITE"/>
            <ul className={css.Menu}>
                <HamburgerMenu />
            <MenuItem>OVERVIEW</MenuItem>
            <MenuItem>FEATURES</MenuItem>
            <MenuItem>DETAILS</MenuItem>
            <MenuItem>TECHNOLOGY</MenuItem>
            <MenuItem>FAQ</MenuItem>
            </ul>
            
        </div>
    )
}

export default Menu;