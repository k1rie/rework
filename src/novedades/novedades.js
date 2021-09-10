import React from "react";

import Novedad1 from "./img/novedad1.jpeg"

import Novedad2 from "./img/novedad2.jpg"

import Novedad3 from "./img/novedad3.jpg"

import "./novedades.css"

const Novedades = ()=>{
    return(
        <div className="container__novedades" >
            <div className="container__description">
            <div>
                <a href=""><img src={Novedad1} className="imgnovedad"/></a>
                <a href=""> <h4 className="subtitle">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña</h4></a>
                <p className="description">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña Noche Muy Especial Con las personas correctas Familia y amigos  Gracias  Desfile y Festival […]</p>
                </div>
            </div>

            <div className="container__description">
            <div>
                <img src={Novedad2} className="imgnovedad"/>
                <h4 className="subtitle">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña</h4>
                <p className="description">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña Noche Muy Especial Con las personas correctas Familia y amigos  Gracias  Desfile y Festival […]</p>
                </div>
            </div>

            <div className="container__description">
            <div>
                <img src={Novedad3} className="imgnovedad"/>
                <h4 className="subtitle">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña</h4>
                <p className="description">Noche Muy Especial En El Desfile y Festival de Independencia Salvadoreña Noche Muy Especial Con las personas correctas Familia y amigos  Gracias  Desfile y Festival […]</p>
                </div>
            </div>

        </div>
    )
}

export default Novedades