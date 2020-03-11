import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './loadingAni.json'
import * as Scroll from 'react-scroll';


import '../sass/app.scss';
import '../sass/views/_consultatie.scss';

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
            <div className="loading">
                <div className="rocket_ani">
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
            <a href="https://www.olvz.be">
                <img className="logo" src="homepage/logolvp.svg" alt="logo" />
            </a>

            <div className="navbar">
                <Link className="back" to="/"><img src="homepage/terug.svg" alt="terug" /></Link>
            </div>

            <div className="heading_container">
                <h1 className="planetName">Consultatie</h1>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/opname"><img src="homepage/opname.svg" alt="opname" /></Link>
            </div>

            <div className="container_content">
                <div className="container_action">
                    
                    <Link className="action" to="/consultatie/WatZalErGebeuren">
                        <img src="homepage/watdoen.svg" alt="watdoen" />
                    </Link>
                    <div className="action">
                        <img src="homepage/spelletjes.svg" alt="spelletjes" />
                    </div>
                    <div className="action">
                        <img src="homepage/personeel.svg" alt="personeel" />
                    </div>
                </div>
                <img className="olivia" src="homepage/oliviaMetRaket.svg" alt="olivia" />
                <img className="planet_bg" src="homepage/consultatie_bg.svg" alt="planet" />
            </div>
        </section>
    )
}