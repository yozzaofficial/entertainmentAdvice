import React from "react"
import { useSearchParams } from "react-router-dom";
import Title from "./../components/Title"
import Data from "./../titles"
import Arrow from "./../components/Arrow"
import TitleDetail from "./TitleDetail";
import "./css/Home.css"
export default function Home(){

const [searchParams] = useSearchParams();
const [openTitle,setOpenTitle] = React.useState(false)
const [titleOpened,setTitleOpened] = React.useState()
const type = searchParams.get("type");

let currentFilter = type ? Data.filter(e => e.Type === type) : Data;

const favTitles = currentFilter.filter(e => e.Favorite==true)
const currentTitles = currentFilter.filter(e=> e.Current==true)

const bestToScroll = React.useRef(null)
const adviceToScroll= React.useRef(null)
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
    setOpenTitle(prev => !prev)
    const titleSelected = Data.find(e => e.id==id)
    setTitleOpened(titleSelected)
}

return (
    <>
    <main className={openTitle ? "backgroundBlur" : null}>
        <div className="adviceContainer">
            <h2>Matteo suggest</h2>
            <div>
                <Arrow dir="left" clickHandler={() => clickHandlerLx(adviceToScroll)} />
                <ul className="titlesContainer" ref={adviceToScroll}>
                    <Title Data={currentFilter} openTitleHandler={openTitleHandler}/>
                </ul>
                <Arrow dir="right" clickHandler={() => clickHandlerRx(adviceToScroll)}/>
            </div>
        </div>
        <div className="bestContainer">
            <h2>Matteo Favorite's</h2>
            <div >
                <Arrow dir="left" clickHandler={() => clickHandlerLx(bestToScroll)} />
                <ul className="titlesContainer" ref={bestToScroll}>
                    <Title Data={favTitles} openTitleHandler={openTitleHandler}/>
                </ul>
                <Arrow dir="right" clickHandler={() => clickHandlerRx(bestToScroll)}/>
            </div>
        </div>
        {currentTitles.length>0 &&  <div className="currentContainer">
            <h2>Matteo Current's watching</h2>
            <div>
                <ul className="titlesContainer">
                    <Title Data={currentTitles} openTitleHandler={openTitleHandler}/>
                </ul>
            </div>
        </div>}
    </main>
    {openTitle && <TitleDetail title={titleOpened} closeTitleDetail={()=> setOpenTitle(prev => !prev)}/>}
    </>
)
}