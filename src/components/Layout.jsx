import React from "react"
import {Outlet,NavLink, useSearchParams} from "react-router-dom"
import "./css/Layout.css"
export default function Layout(){
    const activeStyles={
        fontWeight: "bold",
    } 
    const [searchParams,setSearchParams] = useSearchParams()
    const type = searchParams.get("type");



    return(
        <>
            <header id="headerLayout">
                <h1><NavLink to="/">Matteo Advice</NavLink></h1>
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