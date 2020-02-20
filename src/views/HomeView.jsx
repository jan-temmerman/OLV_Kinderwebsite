import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './rocketANi.json'

import '../sass/app.scss';
import '../sass/views/_home.scss';

export default function HomeView() {
    const clouds = [];
    const ref = useRef();
    const calc = (o) => `translateY(${o * 0.05}px)`;
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const [bottomOffset, setBottomOffset] = useState(12)


    const handleScroll = (event) => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset });

        let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
        let devider = 10
        console.log(posY)
            //setBottomOffset(posY/devider + 12)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function scrollBottom() {
        window.scrollTo(0, 99999);
    }
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', scrollBottom, false);
    } else if (window.attachEvent) window.attachEvent('onload', scrollBottom);

    function generateClouds(amount) {
        const cloudArray = ['wolk_1', 'wolk_2', 'wolk_3'];
        for (let i = 0; i < amount; i++) {
            const cloud = Math.floor(Math.random() * (cloudArray.length - 1));
            const size = Math.random() * 25;
            const element = (
                <animated.img
                    src={`homepage/${cloudArray[cloud]}.svg`}
                    alt="Cloud"
                    className="cloud"
                    style={{
                        width: `${size}%`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: `${size / 20}`,
                        transform: offset.interpolate(calc),
                    }}
                />
            );
            clouds.push(element);
        }
    }

    return (
        <div className="background">
            <section className="container space">
            <div className="planet_container">
              <Link className="planet" to="/consultatie"><img src="homepage/consultatie.svg" alt="consultatie" /></Link>
              <Link className="planet" to="/opname"><img src="homepage/opname.svg" alt="opname" /></Link>
              <Link className="planet" to="/dagkliniek"><img src="homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
            </div>
            </section>
            {/*<img
                src="homepage/raket.svg"
                alt="Raket"
                className="rocket"
                style={{bottom: bottomOffset + 'vh'}}
            />*/}
            <div style={{zIndex: 4}} className="rocket">
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
            </div>
            <section className="container earth" onLoad={generateClouds(8)}>
                <div className="ground" />
                <img className="skyline" src="homepage/skyline_1.svg" alt="Skyline" />
                <img
                    className="hospital"
                    src="homepage/ziekenhuis.svg"
                    alt="Ziekenhuis"
                />
                <section className="clouds" id="cloudContainer" ref={ref}>
                    {clouds}
                </section>
            </section>
        </div>
    );
}
