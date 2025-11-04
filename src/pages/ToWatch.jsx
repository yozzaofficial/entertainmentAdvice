import React from "react"
import { useSearchParams } from "react-router-dom";
import { MyContext } from "../App";
import Data from "./../titles"
import Title from ".//../components/Title"
import addLikeIcon from "./../assets/addLikes.png"
import { useClickAway } from "react-use";
import "./css/ToWatch.css"
export default function ToWatch(){

    const {titleLiked} = React.useContext(MyContext)
    const filteredData = Data.filter(e => titleLiked.includes(e.id))
   
    const [likeHandlerToWatch, setLikeHandlerToWatch] = React.useState(false)
    const listToWatch = React.useRef(null)

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    let currentFilter = type ? filteredData.filter(e => e.Type === type) : filteredData;

    useClickAway(listToWatch, () => {setLikeHandlerToWatch(false)});

    function doubleClickHandler(titleId){
        setLikeHandlerToWatch(true)
    }
 
    return(
        <div className="likedTitledContainer">
            <h2>Titles To Watch</h2>
            {currentFilter.length ? 
                <ul className="titleLikedList" ref={listToWatch}>
                <Title 
                    Data={currentFilter}
                    like={doubleClickHandler}
                    likeHandlerToWatch={likeHandlerToWatch}/>
                </ul> : 
                <div className="emptyLikeContainer">
                    <h2>Add titles...</h2>
                    <img src={addLikeIcon} alt="Add like img" />
                </div>}
        </div>
    )
}