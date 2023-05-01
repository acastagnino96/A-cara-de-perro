import React from "react";
import UncontrolledExample from "./carousel";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
    return (
        <>
            <UncontrolledExample />
            <div className="pets">
                <div className="textoPets">
                    <h2>Sabemos que ellos se merecen lo mejor...</h2>
                    <p>Comunícate con nosotros, para conocer los diferentes productos que tenemos para las necesidades de todo tipo de mascotas.</p>
                </div>
                <div className="petsCategorys">
                    <img src="../src/assets/perros.png" alt="" />
                    <img src="../src/assets/gatos.png" alt="" />
                    <img src="../src/assets/exoticos.png" alt="" />
                </div>
            </div>
            <div className="perroDePelu">
                <img src="../src/assets/perroDePelu.png" alt="" />
                <div className="sacaTurno">
                    <h2>Peluquería Canina</h2>
                    <p>Contamos con servicio de peluquería canina, en donde tu mascota podrá disfrutar de una delicado baño y excelente trato.</p>
                    <Link to={"/hairstyle"} className="btn" id="btnHoverTurno">¡Saca turno!</Link>    
                </div>
            </div>
            <div className="textoPets">
                    <h2>Productos destacados</h2>
                    <p>Estos son algunos de nuestros productos que más se llevan los clientes.</p>
            </div>
            <div className="petsProducts">
                    <img src="../src/assets/PDUno.png" alt="" />
                    <img src="../src/assets/PDDos.png" alt="" />
                    <img src="../src/assets/PDTres.png" alt="" />
                    <img src="../src/assets/PDCuatro.png" alt="" />
                    <img src="../src/assets/PDCinco.png" alt="" />
                </div>
        </>
    )
}