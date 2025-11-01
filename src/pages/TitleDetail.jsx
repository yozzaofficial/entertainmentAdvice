import React from "react"
import "./css/TitleDetail.css"
export default function TitleDetail({title,closeTitleDetail}){

    return(
        <div className="titleDetailContainer">
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
        <span onClick={closeTitleDetail}>X</span>
    </div>
)
}