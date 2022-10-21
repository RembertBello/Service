import React from 'react';
import './BodyMain';
import './Section.css';

const Section = () => {

    const listSection = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            paragraph: 'Esto es un gran párrafo 1',
            video: 'https://www.youtube.com/embed/OkndnBVP808',
            typeClass: 'section--left',
            colorElement: 'element--color-black',
            buttons: ''
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium non modi officia provident aperiam et tenetur. Ducimus ut minima quia neque id corrupti sapiente quidem! Ullam explicabo odio voluptate?',
            video: 'https://www.youtube.com/embed/3-KS3nbloDw',
            typeClass: 'section--right',
            colorElement: 'element--color-gold'

        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium non modi officia provident aperiam et tenetur. Ducimus ut minima quia neque id corrupti sapiente quidem! Ullam explicabo odio voluptate?',
            video: 'https://www.youtube.com/embed/na2KwJliLJ0',
            typeClass: 'section--left',
            colorElement: 'element--color-black'

        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium non modi officia provident aperiam et tenetur. Ducimus ut minima quia neque id corrupti sapiente quidem! Ullam explicabo odio voluptate?',
            video: 'https://www.youtube.com/embed/27DsmpusJhw',
            typeClass: 'section--right',
            colorElement: 'element--color-gold'
        }
    ];

    return (
        <div>
            {
                listSection.map(listSectionItem => {
                    return (
                        <section className={listSectionItem.typeClass} >
                            <div className="section__texts">
                                <h2 className="section__title" >{listSectionItem.title}</h2>

                                <p className='section__texts__paragraph'>{listSectionItem.paragraph}</p>

                                <div className="main__links">
                                    <a className="main__a signs-up buttons-aspect" href="./#form">REGISTRAR</a>
                                </div>
                            </div>

                            <figure className="figure">
                                <iframe className="figure__iframe"
                                    src={listSectionItem.video} title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer;
                        autoplay;
                        clipboard-write;
                         encrypted-media; gyroscope;
                         picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </figure>
                        </section>
                    )
                })
            }

            <section className="section">
                <form
                    id="form"
                    className="main__form"
                    action="https://formsubmit.co/765822ba96d4181c2d8a0a7f1e993227"
                    method="POST"
                >
                    <input
                        type="text"
                        name="nombre"
                        className="input__name main__form__input"
                        placeholder="Tu nombre*"
                        required
                    />
                    <input
                        type="text"
                        name="empresa"
                        className="input__business main__form__input"
                        placeholder="Nombre de tu empresa*"
                        required
                    />
                    <input
                        type="text"
                        name="numero"
                        className="input__business main__form__input"
                        placeholder="Tu número telefónico"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="email main__form__input"
                        placeholder="Tu correo*"
                        required
                    />
                    <input
                        type="submit"
                        value="Solicitar"
                        className="submit buttons-aspect"
                    />

                    <input
                        type="hidden"
                        name="_next"
                        value="https://service-emperador.netlify.app/"
                    />
                    <input
                        type="hidden"
                        name="_captcha"
                        value="false" />
                </form>
            </section>
        </div>

    );
};


export default Section;
