import React from "react"
import { MyContext } from "../App";
import Data from "./../titles"
import Title from ".//../components/Title"
import "./css/ToWatch.css"
export default function ToWatch(){

    const {titleLiked} = React.useContext(MyContext)
    const filteredData = Data.filter(e => titleLiked.includes(e.id))
    return(
        <div className="likedTitledContainer">
            <ul className="titleLikedList">
                <Title Data={filteredData}/>
            </ul>
        </div>
    )
}