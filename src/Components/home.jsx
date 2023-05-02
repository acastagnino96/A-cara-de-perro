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
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/perros.png?alt=media&token=0c14234f-39e6-47cc-9ac4-8f11a57b78e5" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/gatos.png?alt=media&token=66bf2c92-e035-4350-9956-d289a9f880b2" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/exoticos.png?alt=media&token=8efcedd6-44c9-4b20-8ec1-f557c731a745" alt="" />
                </div>
            </div>
            <div className="perroDePelu">
                <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/perroDePelu.png?alt=media&token=59c4b469-ddea-499a-b8d5-afaa32ee4fb3" alt="" />
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/PDUno.png?alt=media&token=984481fa-e1ec-4db5-8df8-38c1771b8bca" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/PDDos.png?alt=media&token=ea94f0f0-3c49-46bb-8fa4-97a101da630e" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/PDTres.png?alt=media&token=12068182-7bde-4b31-9bd1-77826f354788" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/PDCuatro.png?alt=media&token=62d61f42-dd2f-44f7-bfc9-780cbe1c3235" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/PDCinco.png?alt=media&token=6e73dd17-a85f-4893-9c64-2bd9af75e512" alt="" />
                </div>
        </>
    )
}
