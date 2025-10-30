import React from "react"
import {Outlet,NavLink, useSearchParams} from "react-router-dom"
import "./css/Layout.css"
export default function Layout(){
    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
    } 
    const [searchParams,setSearchParams] = useSearchParams()
    const type = searchParams.get("type");



    return(
        <>
            <header className="headerLayout">
                <h1><NavLink to="/">Matteo Advice</NavLink></h1>
                <nav>
                    <NavLink to="?type=film">Film</NavLink>
                    <NavLink to="?type=series">Series</NavLink>
                    {type ? <NavLink to ="/" className="filterActive">x</NavLink> : null}
                </nav>
            </header>
            <Outlet/>
        </>
    )
}