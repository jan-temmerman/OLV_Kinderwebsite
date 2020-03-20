import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import '../../sass/app.scss';
import '../../sass/views/_wieiswie.scss';

export default function Opna_WieIsWie() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    useEffect(() => {
        let audio = new Audio('/audio/wie_is_wie.wav');
        audio.play();

        localStorage.setItem("silencePreviousPage", true)

        return
    }, [])

    return(
        <section className="container_WHO space_WHO" id="planets">
            <div className="heading_container">
                <Link className="back" to="/opname"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Wie is wie?</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
            </div>
            <div className="container_content_opna_WHO">
                <div className="carousel_container">
                    <Carousel 
                    arrowLeft={<img className="carousel_arrow" src="/homepage/terug.svg" alt="terug" />}
                    arrowRight={<img className="carousel_arrow" src="/homepage/verder.svg" alt="volgende" />}
                    addArrowClickHandler
                    infinite
                    >
                        <div className="person_card">
                            <h2 className="name">Verpleegkundige</h2>
                            <div>
                                <img src="/wieiswie_page/verpleegster.svg" alt="nurse" />
                            </div>
                        </div>
                        <div className="person_card">
                            <h2 className="name">Arts</h2>
                            <div>
                                <img src="/wieiswie_page/mannelijkedokter.svg" alt="doctor" />
                            </div>
                        </div>
                        <div className="person_card">
                            <h2 className="name">Poetshulp</h2>
                            <div>
                                <img src="/wieiswie_page/kuisvrouw.svg" alt="cleaning" />
                            </div>
                        </div>
                        <div className="person_card">
                            <h2 className="name">Medewerker</h2>
                            <div>
                                <img src="/wieiswie_page/medewerker.svg" alt="employee" />
                            </div>
                        </div>
                        <div className="person_card">
                            <h2 className="name">Psycho - sociaal begeleider</h2>
                            <div>
                                <img src="/wieiswie_page/vrijwilliger.svg" alt="voulunteer" />
                            </div>
                        </div>
                        <div className="person_card">
                            <h2 className="name">Clini clown</h2>
                            <div>
                                <img src="/wieiswie_page/vrouwelijkeclown.svg" alt="clown" />
                            </div>
                        </div>
                    </Carousel>
                </div>
                
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_opname.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}