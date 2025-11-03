import React from "react"
import { useSearchParams } from "react-router-dom";
import { MyContext } from "../App";
import Data from "./../titles"
import Title from ".//../components/Title"
import "./css/ToWatch.css"
export default function ToWatch(){

    const {titleLiked} = React.useContext(MyContext)
    const filteredData = Data.filter(e => titleLiked.includes(e.id))

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    let currentFilter = type ? filteredData.filter(e => e.Type === type) : filteredData;
    return(
        <div className="likedTitledContainer">
            <h2>Titles To Watch</h2>
            <ul className="titleLikedList">
                <Title Data={currentFilter}/>
            </ul>
        </div>
    )
}