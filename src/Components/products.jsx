import React from "react";
import "../styles/products.css";

export default function Products() {
    return (
        <section className="allProducts">
            <div className="productosPerros">
                <h2>Perros</h2>
                <ul>
                    <li>Alimento balanceado</li>
                    <li>Accesorios</li>
                    <li>Higiene</li>
                    <li>Farmacia</li>
                </ul>
            </div>
            <div className="productosGatos">
                <h2>Gatos</h2>
                <ul>
                    <li>Alimento balanceado</li>
                    <li>Accesorios</li>
                    <li>Higiene</li>
                    <li>Farmacia</li>
                </ul>
            </div>
            <div className="productosExticos">
                <h2>Exóticos</h2>
                <ul>
                    <li>Alimento balanceado</li>
                    <li>Accesorios</li>
                    <li>Higiene</li>
                    <li>Farmacia</li>
                </ul>
            </div>
        </section>
    )
}