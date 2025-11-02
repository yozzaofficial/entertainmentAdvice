import React from "react"
import {Link} from "react-router-dom"
import "./css/ProfileMenu.css"
export default function ProfileMenu(){
return(
    <>
        <ul className="profileMenu">
            <li><Link to="/towatch">To Watch</Link></li>
            <li><Link to="/badtitles">Bad Titles</Link></li>
        </ul>
    </>
)
}