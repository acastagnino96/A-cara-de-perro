import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <section className="footers d-flex">
            <img src="../src/assets/logo.png" alt="logo" className="logoMarca"/>
            <div className="sucursales">
                <h1>Sucursales</h1>
                <div className="sucursalUno">
                    <p>Malvinas 1361, Monte Grande <br/>Lunes a sábado de 9:00 a 20:30 hs</p>
                    <div className="telSucursalUno d-flex align-items-center">
                        <img src="../src/assets/logo-whatsapp.png" alt="telefono"/>
                        <p>11-3041-3639</p>
                    </div>
                </div>
                <div className="sucursalDos">
                    <p>Leandro N. Alem 943, Monte Grande <br/>Lunes a sábado de 9:00 a 13 hs y de 16:30 a 20:30 hs</p>
                    <div className="telSucursalDos d-flex align-items-center">
                        <img src="../src/assets/logo-whatsapp.png" alt="telefono" />
                        <p>11-3510-3815</p>
                    </div>
                </div>
            </div>
            <div className="redesSociales">
                <h1>Redes sociales</h1>
                <a href="https://www.instagram.com/acaradeperropetshop/?hl=es" className="d-block">
                    <img src="../src/assets/logo-instagram.png" alt="logo"/>
                    @acaradeperropetshop
                </a>
                <a href="https://m.facebook.com/acaradeperropetshop" className="d-block">
                    <img src="../src/assets/logo-facebook.png" alt="logo"/>
                    @acaradeperropetshop
                </a>
            </div>
        </section>
    )
}