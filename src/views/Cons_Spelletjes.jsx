import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './loadingAni.json'
import * as Scroll from 'react-scroll';


import '../sass/app.scss';
import '../sass/views/_spelletjes.scss';

export default function Cons_Spelletjes() {

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
            <a href="https://www.olvz.be">
                <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
            </a>

            <div className="navbar">
                <Link className="back" to="/consultatie"><img src="/homepage/terug.svg" alt="terug" /></Link>
            </div>

            <div className="heading_container">
                <h1 className="planetName">Spelletjes</h1>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
            </div>

            <div className="container_content_spel">
                <div className="container_action_spel">

                    <Link className="game" to="#" >
                        <img src="/spelletjes_page/rugzak.svg" alt="game" />
                    </Link>

                    <Link className="game" to="/consultatie/spelletjes/virusspel" >
                        <img src="/spelletjes_page/virusspel.svg" alt="game" />
                    </Link>

                    <Link className="game" to="#" >
                        <img src="/spelletjes_page/lichaamspel.svg" alt="game" />
                    </Link>

                    <Link className="game" to="/consultatie/spelletjes/memory" >
                        <img src="/spelletjes_page/memory.svg" alt="game" />
                    </Link>

                    <img className="olivia-rocket" src="/spelletjes_page/olivia-raket.svg" alt="olivia" />
                </div>
                <img className="planet_bg_spel" src="/homepage/consultatie_bg.svg" alt="planet" />
            </div>
        </section>
    )
}