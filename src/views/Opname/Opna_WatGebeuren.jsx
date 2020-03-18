import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../loadingAni.json'
import * as Scroll from 'react-scroll';


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Opna_WatGebeuren() {

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
                <Link className="back" to="/opname"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Wat zal er gebeuren?</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
            </div>

            <div className="container_content_bellen">
                <div className="container_action_bellen">
                    <div>
                        <img className="bel" src="/WatGebeuren_page/CTSCAN.svg" alt="CTSCAN"/>
                        <img className="bel" src="/WatGebeuren_page/ECHO.svg" alt="ECHO"/>
                        <img className="bel" src="/WatGebeuren_page/EKG.svg" alt="EKG"/>
                        <img className="bel" src="/WatGebeuren_page/INFUUS.svg" alt="INFUUS"/>
                        <img className="bel" src="/WatGebeuren_page/KALINOX.svg" alt="KALINOX"/>
                        <img className="bel" src="/WatGebeuren_page/MRI.svg" alt="MRI"/>
                        <img className="bel" src="/WatGebeuren_page/NPA.svg" alt="NPA"/>
                        <img className="bel" src="/WatGebeuren_page/LACTOSETEST.svg" alt="LACTOSETEST"/>
                        <img className="bel" src="/WatGebeuren_page/RUGGENPRIK.svg" alt="RUGGENPRIK"/>
                    </div>

                    <img className="olivia_bellenblaas" src="/WatGebeuren_page/olivia_belleblaas.svg" alt="Olivia"/>
                </div>
                <div className="planet_bg">
                    <img src="/homepage/planeet_opname.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}