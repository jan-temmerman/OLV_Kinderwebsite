import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './rocketAni_v2.json'
import * as Scroll from 'react-scroll';


import '../sass/app.scss';
import '../sass/views/_consultatie.scss';

export default function Consulatie() {


    return(
        <section className="container space" id="planets">
                <img className="logo" src="homepage/logolvp.svg" alt="logo" />
            
            <div className="planet_container_C">
                <Link className="planet_C" to="/opname"><img src="homepage/opname.svg" alt="opname" /></Link>
                <Link className="planet_C" to="/dagkliniek"><img src="homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
            </div>
        </section>
    )
}