import React, { useContext } from "react"
import {Outlet,NavLink, useSearchParams} from "react-router-dom"
import { MyContext } from "../App"
import ProfileMenu from "./ProfileMenu"
import "./css/Layout.css"
export default function Layout(){
    const activeStyles={
        fontWeight: "bold",
    } 
    const [searchParams,setSearchParams] = useSearchParams()
    const type = searchParams.get("type");
    const [openMenu, setOpenMenu] = React.useState(false)

    const {openTitle} = useContext(MyContext);

    return(
        <>
            <header id="headerLayout" className={openTitle ? "backgroundBlur" : null}>
                <div>
                    <h1><NavLink to="/">Matteo Advice</NavLink></h1>
                    <i className="icon-profile" onClick={()=>setOpenMenu(prev => !prev)}>
                        {openMenu && <ProfileMenu/>}
                    </i>
                </div>
                <nav>
                    <NavLink 
                    to="?type=film"
                    end
                    style={type === "film" ? activeStyles : undefined}
                    >Film</NavLink>
                    <NavLink 
                    to="?type=series" 
                    style={type === "series" ? activeStyles : undefined}
                     >   Series</NavLink>
                    {type ? <NavLink to ="/" className="filterActive">x</NavLink> : null}
                </nav>
            </header>
            <Outlet/>
        </>
    )
}