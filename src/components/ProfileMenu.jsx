import React from "react"
import {Link} from "react-router-dom"
import "./css/ProfileMenu.css"
export default function ProfileMenu(){
return(
    <>
        <ul className="profileMenu">
            <Link to="/towatch"><li>To Watch</li></Link>
            <Link to="/badtitles"><li>Bad Titles</li></Link>
        </ul>
    </>
)
}