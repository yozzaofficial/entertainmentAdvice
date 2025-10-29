import React from "react"
import { useSearchParams } from "react-router-dom";
import Data from "./../titles"
import { nanoid } from 'nanoid';
export default function Title({favorite=false,current=false}){

    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    let filter
    let currentFilter = type
    ? Data.filter(e => e.Type === type)
    : Data;

    const favTitles = currentFilter.filter(e => e.Favorite==true)
    const currentTitles = currentFilter.filter(e=> e.Current==true)

    if(favorite)
        filter=favTitles
    else if(current)
            filter=currentTitles
    else
        filter=currentFilter

      const liElement = filter.map((e)=>{
        return(
        <li 
            key={nanoid()} 
            className="titles" 
            style={{
                    backgroundImage:`url("${e.Image}")`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"}}>
            {e.id}</li>)
    })
    
    return(
        <>
        {liElement}
        </>
    )
}