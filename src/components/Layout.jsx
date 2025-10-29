import React from "react"
import {Outlet,NavLink, useSearchParams} from "react-router-dom"
import "./css/Layout.css"
export default function Layout(){
    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
    } 
    return(
        <>
            <header className="headerLayout">
                <h1><NavLink to="/">Matteo Advice</NavLink></h1>
                <nav>
                    <NavLink to="?type=film">Film</NavLink>
                    <NavLink to="?type=series">Series</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}