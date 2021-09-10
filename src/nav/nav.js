import React,{useRef,useState,useEffect} from "react";

import Logo from "./img/logowhite.png"

import Facebook from "./img/facebook.png"

import "./nav.css"

function Nav() {

    const navbar = useRef(null)


function mostrarscroll (){
let scrolltop = document.documentElement.scrollTop
if(scrolltop > 300){
    navbar.current.classList.add("black")
}else{
    navbar.current.classList.remove("black")
}
}

window.addEventListener("scroll", mostrarscroll)


    return (
        <div className="container" ref={navbar}>
            <div className="container__logo"><img src={Logo} className="logo" /></div>

            <div className="container__links"> 

            <div className="container__link"> <a className="link-inicio" href="">Inicio </a> </div> 
            <div className="container__link"> <a className="link-donar" href="">Donar   </a > </div>
            <div className="container__link"> <a className="link-noticias" href="">Noticias   </a > </div>
            <div className="container__link" ><a className="link-acerca"href="" >Acerca de  </a> </div>
            <div className="container__link"> <a className="link-img" href=""><img src={Facebook}  className="facebook" /> </a> </div>

            </div>

            </div>
    )
}

export default Nav