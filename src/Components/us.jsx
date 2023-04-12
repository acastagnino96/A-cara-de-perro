import React from "react";
import "../styles/us.css";

export default function Us() {
    return (
        <section>
            <div className="usBox">
                <img src="../src/assets/fototienda.jpg" alt="fototienda" />
                <div className="textUs">
                        <h1>A CARA DE PERRO <span className="d-block" id="textDescription">PET SHOP & PELUQUERIA CANINA</span></h1>
                        <p>Somos una tienda de productos para mascotas que comercializamos alimentos de todo tipo para perros y gatos, tenemos productos para la higiene y accesorios muy variados, peceras, caniles, bolsos transportadores, colchonetas, ropa de diseño y mucho más. <br />¡Además realizamos envíos a domicilio! <br /><br />Contamos además con nuestro sector de Peluquería Canina en donde tu perro podrá disfrutar de un delicado baño y un excelente trato. Nos especializamos en cortes de raza, limpieza de oídos y corte de uñas gracias a nuestros profesionales más capacitados en un salón vidriado con vista a la calle para tu tranquilidad. <br /><br />¡Te esperamos en nuestras sucursales!</p>
                    </div>
            </div>
        </section>
    )
}