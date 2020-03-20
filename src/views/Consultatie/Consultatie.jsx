import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import animationData from '../loadingAni.json'


import '../../sass/app.scss';
import '../../sass/views/_consultatie.scss';

export default function Consulatie() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

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
                <h1 className="planetName">Consultatie</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
            </div>

            <div className="container_content">
                <div className="container_action">
                    
                    <Link className="action" to="/consultatie/wat_zal_er_gebeuren">
                        <h2>Wat zal er gebeuren?</h2>
                        <img src="/homepage/watdoen.svg" alt="watdoen" />
                    </Link>
                    <Link className="action" to="/consultatie/spelletjes">
                        <h2>Spelletjes</h2>
                        <img src="/homepage/spelletjes.svg" alt="spelletjes" />
                    </Link>
                    <Link className="action" to="/consultatie/wie_is_wie">
                        <h2>Wie is wie?</h2>
                        <img src="/homepage/personeel.svg" alt="personeel" />
                    </Link>
                    
                </div>
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_consultatie.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}