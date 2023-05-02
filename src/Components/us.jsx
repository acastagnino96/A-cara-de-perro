import React from "react";
import "../styles/us.css";

export default function Us() {
    return (
        <section>
            <div className="usBox">
                <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/fototienda.jpg?alt=media&token=e9a8bb08-0946-47c3-85d0-fc6af83391de" alt="fototienda" />
                <div className="textUs">
                        <h1>A CARA DE PERRO <span className="d-block" id="textDescription">PET SHOP & PELUQUERIA CANINA</span></h1>
                        <p>Somos una tienda de productos para mascotas que comercializamos alimentos de todo tipo para perros y gatos, tenemos productos para la higiene y accesorios muy variados, peceras, caniles, bolsos transportadores, colchonetas, ropa de diseño y mucho más. <br />¡Además realizamos envíos a domicilio! <br /><br />Contamos además con nuestro sector de Peluquería Canina en donde tu perro podrá disfrutar de un delicado baño y un excelente trato. Nos especializamos en cortes de raza, limpieza de oídos y corte de uñas gracias a nuestros profesionales más capacitados en un salón vidriado con vista a la calle para tu tranquilidad. <br /><br />¡Te esperamos en nuestras sucursales!</p>
                    </div>
            </div>
        </section>
    )
}
