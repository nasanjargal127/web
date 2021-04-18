import React from "react"
import css from "./style.module.css"
import image from "../Assets/tempsnip.png"
import {FaEllipsisV} from 'react-icons/fa'
const Features = () => {
    return(
        <div className={css.Features}>
            {/* <video src={video} className={css.video}></video> */}
            <img className={css.video} type="img" accept="image/* "  src={image}/>
            
           <div>
                <h3>Features <FaEllipsisV className={css.icon} /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <span className={css.cyan}>READ OUR FEATURES</span>
             </div>
        </div>
    )
}
export default Features;