import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

import '../../sass/app.scss';
import '../../sass/views/_consultatie.scss';

export default function Dagkliniek() {

    useEffect(() => {
        let audio = new Audio('/audio/dagkliniek.wav');
        audio.play();

        return
    }, [])

    return(
        <section className="container space" id="planets">
            {/*<div className="loading">
                <div className="rocket_ani">
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
            </div>*/}

            <div className="heading_container">
                <Link className="back" to="/"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Dagkliniek</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
                <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
            </div>

            <div className="container_content_dag">
                <div className="container_action_dag">
                    <ReactPlayer url='https://vimeo.com/398967843' height={'100%'} />
                    {/*<iframe src="https://player.vimeo.com/video/398967843" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>*/}
                </div>
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_dagkliniek.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}