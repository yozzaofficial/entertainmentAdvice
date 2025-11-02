import React from "react"
import { nanoid } from 'nanoid';
export default function Title({Data,openTitleHandler,like}){

    
      const liElement = Data.map((e)=>{
        const keyID = nanoid();
        return(
        <li 
            key={keyID} 
            className="titles" 
            {...(openTitleHandler ? { onClick: () => openTitleHandler(e.id) } : {})}
            {...(like ? { onDoubleClick: () => like(e.id) } : {})}
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