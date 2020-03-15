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

export default function Opname() {

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
                <h1 className="planetName">Opname</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
            </div>

            <div className="container_content">
                <div className="container_action">
                    
                    <Link className="action" to="/consultatie/wat_zal_er_gebeuren">
                        <img src="/homepage/watdoen.svg" alt="watdoen" />
                    </Link>
                    <Link className="action" to="/opname/spelletjes">
                        <img src="/homepage/spelletjes.svg" alt="spelletjes" />
                    </Link>
                    <Link className="action" to="/consultatie/wie_is_wie">
                        <img src="/homepage/personeel.svg" alt="personeel" />
                    </Link>
                </div>
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_opname.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}