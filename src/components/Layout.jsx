import React, { useContext} from "react"
import {Outlet,NavLink, useSearchParams,useLocation,Link} from "react-router-dom"
import { MyContext } from "../App"
import ProfileMenu from "./ProfileMenu"
import { useClickAway } from "react-use";
import "./css/Layout.css"
export default function Layout(){
    const activeStyles={
        fontWeight: "bold",
    } 
    const [searchParams,setSearchParams] = useSearchParams()
    const type = searchParams.get("type");
    const [openMenu, setOpenMenu] = React.useState(false)
    const iconProfile = React.useRef(null);
    const {openTitle} = useContext(MyContext);

    const currentLocation = useLocation();

    useClickAway(iconProfile, () => {if(openMenu){setOpenMenu(false)}});
    return(
        <>
            <header id="headerLayout" className={openTitle ? "backgroundBlur" : null}>
                <div>
                    <h1><NavLink to="/">Matteo Advice</NavLink></h1>
                    <div className="iconContainer">
                        {currentLocation.pathname!="/" && <Link to="/"><i className="backButton"></i></Link>}
                        <i 
                            className="icon-profile" 
                            onClick={()=>setOpenMenu(prev => !prev)}
                            ref={iconProfile}>
                            {openMenu && <ProfileMenu />}
                        </i>
                    </div>
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
                    {type ? <NavLink to ={`${currentLocation.pathname}`} className="filterActive">x</NavLink> : null}
                </nav>
            </header>
            <Outlet/>
        </>
    )
}