import React from "react";
import './BodyMain.css';

function BodyMain() {
    return (
        <div>
            <main className="main" id="main">
                <div className="main__texts">
                    <h1 className="main__title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sapiente ad dolor quam
                    </h1>
                    <p className="main__texts__paragraph">
                        magnam sint aut assumenda dolore. Quisquam repellat aut
                        sunt eum alias odio inventore aperiam animi ratione doloribus.
                    </p>

                    <div className="main__links">
                        <a className="main__a signs-up buttons-aspect" href="./#form">REGISTRAR</a>
                    </div>
                </div>


                <figure className="figure">
                    <iframe
                        className="figure__iframe"
                        src="https://www.youtube.com/embed/OkndnBVP808"
                        title="YouTube video player"

                        frameborder="0"
                        allow="
                            accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            gyroscope;
                            picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </figure>
            </main>
        </div>
    );
}
export default BodyMain;
