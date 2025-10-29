import React from "react"
import Title from "./../components/Title"
import "./css/Home.css"
export default function Home(){
return (
    <main>
        <div className="adviceContainer">
            <h2>Matteo suggest</h2>
            <div>
                <ul className="titlesContainer">
                    <Title/>
                </ul>
            </div>
        </div>
        <div className="bestContainer">
            <h2>Matteo Favorite's</h2>
            <div>
                <ul className="titlesContainer">
                    <Title favorite={true}/>
                </ul>
            </div>
        </div>
        <div className="currentContainer">
            <h2>Matteo Current's watching</h2>
            <div>
                <ul className="titlesContainer">
                    <Title current={true}/>
                </ul>
            </div>
        </div>
    </main>
)
}