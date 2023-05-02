import React from "react";
import "../styles/hairstyle.css";

export default function Hairstyle() {
    return (
        <section>
            <div className="style">
                <div className="textoStyle">
                    <h2>¡Estilo para tu mascota!</h2>
                    <p>“La peluquería es el arte de destacar la belleza única de cada perro generando trazos de creatividad en cada línea, resaltando las virtudes y destacando sus cualidades, brindando bienestar y salud”</p>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/fotopelu.jpg?alt=media&token=ee563224-3c59-4620-a0cd-8b0789d77e82" alt="" />
            </div>
            <div className="hairService">
                <div className="textService">
                    <h1>Servicios que ofrecemos</h1>
                    <h2>Baño y corte o deslanado</h2>
                    <p>Incluye baño con shampoo natural, secado, corte a máquina y/o tijera, peinado, limpieza de oídos y corte de uñas.</p>
                    <h2>Baño de belleza</h2>
                    <p>Incluye baño con shampoo natural, secado, peinado, limpieza de oídos y corte de uñas</p>
                    <div className="reservation">
                        <a href="https://wa.me/1130413639" target="_blank" className="btn" id="btnHoverdos">¡Reservar un turno!</a>
                        <div className="reservationText">
                            <h2>Detallar al solicitar turno</h2>
                            <ul>
                                <li>Tipo de servicios</li>
                                <li>Tamaño del perro</li>
                            </ul>
                            <p>Chico hasta 7kg <br/>Mediano hasta 15 kg <br/>Grande hasta 20 kg <br/>Gigante +20kg</p>
                        </div>
                    </div>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/fotopeludos.jpg?alt=media&token=f08eec81-3fb4-46ce-92db-2d80d47efdc7" alt="peluqueria" />
            </div>
        </section>
    )
}
