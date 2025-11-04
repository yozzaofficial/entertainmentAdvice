import React from "react"
import { nanoid } from 'nanoid';
import { MyContext } from "../App";

export default function Title({Data,openTitleHandler,like,likeHandlerToWatch}){

     const {setTitleLiked} = React.useContext(MyContext)
    
     function removeLike(titleId){
        setTitleLiked(prev => {return prev.filter(id => id !== titleId)})
    }     

      const liElement = Data.map((e)=>{
        const keyID = nanoid();
        return(
        <li 
            key={keyID} 
            className={`titles ${likeHandlerToWatch ? "filterToWatch" : ""}`}
            {...(openTitleHandler ? { onClick: () => openTitleHandler(e.id) } : {})}
            {...(like ? { onDoubleClick: () => like(e.id) } : {})}
            style={{
                    backgroundImage:`url("${e.Image}")`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"}}>
            
            {likeHandlerToWatch && <span className="likeButtonToWatch" onClick={()=>removeLike(e.id)}></span>}
            </li>)
    })
    
    return(
        <>
        {liElement}
        </>
    )
}