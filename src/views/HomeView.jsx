import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { useSpring } from 'react-spring';
import '../sass/app.scss';
import '../sass/views/_home.scss';

export default function HomeView() {
    const clouds = [];
    const ref = useRef();
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset });
    };

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
                <img
                    src={`homepage/${cloudArray[cloud]}.svg`}
                    alt="Cloud"
                    className="cloud"
                    style={{
                        width: `${size}%`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: `${size / 20}`,
                    }}
                />
            );
            clouds.push(element);
        }
    }

    return (
        <div className="background">
            <section className="container space" />
            <Spring from={{ y: 0 }} to={{ y: 100 }}>
                {(props) => (
                    <img
                        src="homepage/raket.svg"
                        alt="Raket"
                        className="rocket"
                        style={props}
                    />
                )}
            </Spring>
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
