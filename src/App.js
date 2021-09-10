import React, {useState,useRef,useEffect} from "react"

import Loader from "./loader/loader"

import Novedades from "./novedades/novedades"

import Nav from "./nav/nav"

import Slider from "./slider/slider"


import "./app.css"

function App(){



return(
    <div className="containerapp" >
       <div> <Nav/></div>
       <div><Slider/></div>
       <div><Novedades/></div>
    </div>
)
}

export default App
