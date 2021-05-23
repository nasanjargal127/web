import React from "react"
import Details from "../Details"
import Features from "../Features"
import Menu from  "../Menu"
import {Route, Switch } from "react-router-dom"
const Page = () =>{
     return(
         <div>
                 <Menu/>
              <Features/>
               <Details/>
         </div>
     )
}
export default Page;