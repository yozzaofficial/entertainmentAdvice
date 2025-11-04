import React from "react"
import { useSearchParams } from "react-router-dom";
import { MyContext } from "../App";
import Data from "./../titles"
import Title from ".//../components/Title"
import addLikeIcon from "./../assets/addLikes.png"
import "./css/ToWatch.css"
export default function BadTitles(){
    const {titleDisliked,setTitleDisliked} = React.useContext(MyContext)
    const filteredData = Data.filter(e => titleDisliked.includes(e.id))
   
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    let currentFilter = type ? filteredData.filter(e => e.Type === type) : filteredData;
 
  function removeDislike(id) {
  setTitleDisliked(prev => prev.filter(itemId => itemId !== id));
}
    return(
        <div className="likedTitledContainer">
            <h2>Bad titles</h2>
            {currentFilter.length ? 
                <ul className="titleLikedList">
                <Title 
                    Data={currentFilter}
                    like={removeDislike}
                    />
                </ul> : 
                <div className="emptyLikeContainer">
                    <h2>Empty...</h2>
                </div>}
        </div>
    )
}