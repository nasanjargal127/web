import React from 'react'
import css from './style.module.css'
import image from "../../Assets/circle.PNG"

const DetailsItem = () => {
    return(
        <div className={css.DetailsItem}>

        
        <img  height="100" src={image} /> 
        
       <div>
            <strong><p>Lorem ipsum dolor sit amet  </p></strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
         </div>
    </div>
    )
}

export default DetailsItem; 