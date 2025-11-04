import React, { useContext } from "react"
import { useSearchParams } from "react-router-dom";
import Title from "./../components/Title"
import Data from "./../titles"
import Arrow from "./../components/Arrow"
import TitleDetail from "./TitleDetail";
import { MyContext } from "../App";
import { useClickAway } from "react-use";
import "./css/Home.css"
export default function Home(){

const [searchParams] = useSearchParams();
const [titleOpened,setTitleOpened] = React.useState()
const [popupPos, setPopupPos] = React.useState(0);
const type = searchParams.get("type");
const {openTitle,setOpenTitle} = useContext(MyContext)

const {titleLiked, setTitleLiked} = useContext(MyContext)
const [animationId,setAnimationId] = React.useState(null)

let currentFilter = type ? Data.filter(e => e.Type === type) : Data;
const favTitles = currentFilter.filter(e => e.Favorite==true)
const currentTitles = currentFilter.filter(e=> e.Current==true)

const bestToScroll = React.useRef(null)
const adviceToScroll= React.useRef(null)
const titleOpenedPosition =  React.useRef(null)
const titleDetailClickAway = React.useRef(null)
const clickTimeout = React.useRef(null);

useClickAway(titleDetailClickAway, () => {if(openTitle){setOpenTitle(false)}});

function clickHandlerRx(ref){
  if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
}
function clickHandlerLx(ref){
  if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
}
function openTitleHandler(id){
    if (clickTimeout.current) return;

    clickTimeout.current = setTimeout(()=>{

        setOpenTitle(prev => !prev)
        const titleSelected = Data.find(e => e.id==id)
        setTitleOpened(titleSelected)
        const rect = titleOpenedPosition.current.getBoundingClientRect();
        setPopupPos(
            100 + window.scrollY,

      );
      clickTimeout.current = null;
    },250)
   
}

function likeHandler(id){

 if (clickTimeout.current) {
    clearTimeout(clickTimeout.current);
    clickTimeout.current = null;
  }

const titleSelected = Data.find(e => e.id==id)
setTitleLiked(prev => [...prev, titleSelected.id])
setAnimationId(id)
}

return (
    <>
    <main className={openTitle ? "backgroundBlur" : null} ref={titleOpenedPosition}>
        <div className="adviceContainer">
            <h2>Matteo suggest</h2>
            <div>
                <Arrow dir="left" clickHandler={() => clickHandlerLx(adviceToScroll)} />
                <ul className="titlesContainer" ref={adviceToScroll}>
                    <Title 
                        Data={currentFilter} 
                        openTitleHandler={openTitleHandler}
                        like={likeHandler}
                        animationId={animationId}
                    />
                </ul>
                <Arrow dir="right" clickHandler={() => clickHandlerRx(adviceToScroll)}/>
            </div>
        </div>
        <div className="bestContainer">
            <h2>Matteo Favorite's</h2>
            <div >
                <Arrow dir="left" clickHandler={() => clickHandlerLx(bestToScroll)} />
                <ul className="titlesContainer" ref={bestToScroll}>
                    <Title 
                        Data={favTitles} 
                        openTitleHandler={openTitleHandler}
                        like={likeHandler}/>
                </ul>
                <Arrow dir="right" clickHandler={() => clickHandlerRx(bestToScroll)}/>
            </div>
        </div>
        {currentTitles.length>0 &&  <div className="currentContainer">
            <h2>Matteo Current's watching</h2>
            <div>
                <ul className="titlesContainer">
                    <Title 
                    Data={currentTitles}
                    openTitleHandler={openTitleHandler}
                    like={likeHandler}/>
                </ul>
            </div>
        </div>}
    </main>
    {openTitle && titleOpened && 
    <div className="container" ref={titleDetailClickAway}>
        <TitleDetail 
        title={titleOpened} 
        closeTitleDetail={()=> setOpenTitle(prev => !prev)} 
        topPosition = {popupPos}/>
    </div>}
    </>
)
}