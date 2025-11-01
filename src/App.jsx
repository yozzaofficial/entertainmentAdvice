import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import { createContext, useState } from "react";
import "./App.css"
function App() {
const [openTitle,setOpenTitle] = React.useState(false)
  return (
    <>
     <MyContext.Provider value={{openTitle,setOpenTitle}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
export const MyContext = createContext();