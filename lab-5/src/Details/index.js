import React from 'react'
import DetailsItem from './DetailsItem'
import css from  './style.module.css'
import {FaEllipsisV} from 'react-icons/fa'



const Details = () =>{
    return(
        <div className={css.Details}>
            <p>Details <FaEllipsisV className={css.icon} /></p>
            <DetailsItem />
            <DetailsItem />
            <DetailsItem />
            <DetailsItem />
            
        </div>

    )
}

export default Details;