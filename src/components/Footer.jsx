import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__top">
                    <ul>
                        <li><h3>Dirección</h3></li>
                        <li>Carrera 43 #75b-187</li>
                        <li>Barranquilla, Atlántico</li>
                        <li>Edificio: Ciudad Jardín</li>
                    </ul>

                    <div className="about">
                        <h3>Sobre nosotros</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestiae, unde consequatur vel excepturi ut delectus consequuntur perspiciatis illo earum sed aliquid?
                            Tenetur earum voluptates unde numquam dolore! Id, non aliquam.</p>
                    </div>

                    <ul>
                        <li><h3>Teléfonos</h3></li>
                        <li>0000000000</li>
                        <li>0000000000</li>
                    </ul>
                </div>

                <div className="footer__bottom" id="footer ">
                    <p className="footer_paragraphs">© Copyright 2022 By Emperador Soluciones</p>

                </div>
            </footer>
        </div>
    );
};

export default Footer;