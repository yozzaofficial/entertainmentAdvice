import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ToWatch from "./pages/ToWatch"
import BadTitles from "./pages/BadTitles";
import { createContext, useState } from "react";
import "./App.css"
function App() {
const [openTitle,setOpenTitle] = React.useState(false)
const [titleLiked, setTitleLiked] = React.useState([])
const [titleDisliked,setTitleDisliked] = React.useState([])
  return (
    <>
     <MyContext.Provider value={{openTitle,setOpenTitle,titleLiked,setTitleLiked,titleDisliked,setTitleDisliked}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/towatch" element={<ToWatch/>}></Route>
              <Route path="/badtitles" element={<BadTitles/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
export const MyContext = createContext();