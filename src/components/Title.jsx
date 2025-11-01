import React from "react"
import { nanoid } from 'nanoid';
export default function Title({Data}){


      const liElement = Data.map((e)=>{
        return(
        <li 
            key={nanoid()} 
            className="titles" 
            style={{
                    backgroundImage:`url("${e.Image}")`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"}}>
            </li>)
    })
    
    return(
        <>
        {liElement}
        </>
    )
}