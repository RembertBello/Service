import React from 'react';
import './../image/fontello-a540fdbf/css/fontello.css';
import './ButtonWtpp.css';
const ButtonWtpp = () => {
    return (
        <div>
            <a className="btn-wsp"href="https://api.whatsapp.com/send?phone=+57 317 6437828&text=Hola, estoy interesado en el servicio de Emperador Soluciones." target="_blank">
            <i className="icon-whatsapp"></i>
            </a>
            <a className="btn-up" href="./#main">&#8593;</a>
        </div>
    );
};

export default ButtonWtpp;