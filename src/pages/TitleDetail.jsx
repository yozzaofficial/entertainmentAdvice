import React, { useContext } from "react"
import { MyContext } from "../App";
import "./css/TitleDetail.css"
export default function TitleDetail({title,closeTitleDetail,topPosition}){
    const {titleLiked,setTitleLiked} = useContext(MyContext)
    const {titleDisliked,setTitleDisliked} = useContext(MyContext)
    function likeHandler(){
        setTitleLiked(prev => {
            if (prev.includes(title.id)) 
                return prev.filter(id => id !== title.id)
            else 
                return [...prev, title.id]
    })
    }
    function dislikeHandler(){
        setTitleDisliked(prev=>{
             if (prev.includes(title.id)) 
                return prev.filter(id => id !== title.id)
            else 
                return [...prev, title.id]
         
        })
    }

    return(
        <div className="titleDetailContainer" style={{top: `${topPosition}px`}}>
            <header id="titleDetailHeader">
                <img src={title.Image} alt="Title image"></img> 
                <div className="headerTitleDetails">
                    <h2>{title.Name}</h2>
                    <p>{title.Platform}</p>
                    <div>
                        {title.Type == "series" ? <><p>{title.Seasons} Seasons</p>
                        <p>{title.Episodes} Episodes x {title.Duration}min </p></>:
                        <p>Duration {title.Duration}min</p>}
                    </div>
                    <p>{title.Plot}</p>
                </div>
               
            </header>
             <div className="likeContainer">
                    <i 
                    className={titleLiked.includes(title.id)? "likeFilled" : "like"}
                    onClick={likeHandler}></i>
                    <i 
                    className={titleDisliked.includes(title.id) ?"disLikeButtonFilled" : "disLikeButton"}
                    onClick={dislikeHandler}></i>
            </div>
        <span onClick={closeTitleDetail}>X</span>
    </div>
)
}