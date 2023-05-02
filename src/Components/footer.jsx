import React from "react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <section className="footers d-flex">
            <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo.png?alt=media&token=149cf83b-bb52-4e73-8081-369d08519c94" alt="logo" className="logoMarca"/>
            <div className="sucursales">
                <h1>Sucursales</h1>
                <div className="sucursalUno">
                    <p>Malvinas 1361, Monte Grande <br/>Lunes a sábado de 9:00 a 20:30 hs</p>
                    <div className="telSucursalUno d-flex align-items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo-whatsapp.png?alt=media&token=268dc2c9-1a0c-4749-8970-f79db3e85da2" alt="telefono"/>
                        <p>11-3041-3639</p>
                    </div>
                </div>
                <div className="sucursalDos">
                    <p>Leandro N. Alem 943, Monte Grande <br/>Lunes a sábado de 9:00 a 13 hs y de 16:30 a 20:30 hs</p>
                    <div className="telSucursalDos d-flex align-items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo-whatsapp.png?alt=media&token=268dc2c9-1a0c-4749-8970-f79db3e85da2" alt="telefono" />
                        <p>11-3510-3815</p>
                    </div>
                </div>
            </div>
            <div className="redesSociales">
                <h1>Redes sociales</h1>
                <a href="https://www.instagram.com/acaradeperropetshop/?hl=es" className="d-block">
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo-instagram.png?alt=media&token=ad7fefd5-9cdb-4938-9a7c-28ea4e02c706" alt="logo"/>
                    @acaradeperropetshop
                </a>
                <a href="https://m.facebook.com/acaradeperropetshop" className="d-block">
                    <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo-facebook.png?alt=media&token=641bc442-1c5d-49a8-b905-ca520f088752" alt="logo"/>
                    @acaradeperropetshop
                </a>
            </div>
        </section>
    )
}
