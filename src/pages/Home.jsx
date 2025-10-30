import React from "react"
import { useSearchParams } from "react-router-dom";
import Title from "./../components/Title"
import Data from "./../titles"
import "./css/Home.css"
export default function Home(){

const [searchParams] = useSearchParams();
const type = searchParams.get("type");

let currentFilter = type ? Data.filter(e => e.Type === type) : Data;

const favTitles = currentFilter.filter(e => e.Favorite==true)
const currentTitles = currentFilter.filter(e=> e.Current==true)

return (
    <main>
        <div className="adviceContainer">
            <h2>Matteo suggest</h2>
            <div>
                <ul className="titlesContainer">
                    <Title Data={currentFilter}/>
                </ul>
            </div>
        </div>
        <div className="bestContainer">
            <h2>Matteo Favorite's</h2>
            <div>
                <ul className="titlesContainer">
                    <Title Data={favTitles}/>
                </ul>
            </div>
        </div>
        <div className="currentContainer">
            <h2>Matteo Current's watching</h2>
            <div>
                <ul className="titlesContainer">
                    <Title Data={currentTitles}/>
                </ul>
            </div>
        </div>
    </main>
)
}