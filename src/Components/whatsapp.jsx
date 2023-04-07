import React from "react";
import "../styles/whatsapp.css"
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {

    return (
        <a href="https://wa.me/1130413639" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
            <div><BsWhatsapp class="whatsappIcon" /></div>
        </a>
    );
}

export default Whatsapp;