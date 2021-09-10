import React,{useEffect,useRef, useState} from "react";

import img1 from "./img/img1.jpeg"

import img2 from "./img/img2.jpeg"

import img3 from "./img/img3.jpeg"

import "./slider.css"









const Slideshow = ()=>{

    const slideshow = useRef(null)
    const siguiente = ()=>{
if(slideshow.current.children.length > 0){

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = "3s all";

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
    const transicion = ()=>{
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.append(primerElemento);
    }
    slideshow.current.addEventListener("transitionend",transicion)

}
    }
useEffect(()=>{
    setInterval(()=>{
        siguiente()
            },7000)
},[])



return(

<main className="contenedor">
    <div className="main">
    <div className="container__img" ref={slideshow} onClick={siguiente}>
       <div className="slider" > <img src={img1} className="img" /><h2 className="slidertitle">Bienvenido</h2> <h4 className="sliderdescription">Un dia mas, una sonrisa mas</h4> </div>
       <div className="slider"> <img src={img2} className="img" /><h2 className="slidertitle">Bienvenido</h2> <h4 className="sliderdescription">Un dia mas, una sonrisa mas</h4></div>
       <div className="slider"><img src={img3} className="img" /><h2 className="slidertitle">Bienvenido</h2> <h4 className="sliderdescription">Un dia mas, una sonrisa mas</h4> </div>
       </div>
       </div>
       <a href="" className="donar">Donar</a>
       </main>



)}





 








export default Slideshow