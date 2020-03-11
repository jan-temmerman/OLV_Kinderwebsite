import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './rocketAni_v2.json'
import * as Scroll from 'react-scroll';


import '../sass/app.scss';
import '../sass/views/_home.scss';

export default function HomeView() {
    const clouds = [];
	const ref = useRef();
	const rocketRef = useRef();
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
	  
	const [pauseAnimation, setPauseAnimation] = useState(false)

	useEffect(() => {
		setPauseAnimation(true)
		document.body.classList.add("no-sroll")
		return
	}, [])

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
	
	const handleClick = () => {
		setPauseAnimation(false)
		document.getElementById('rocketRef').style.transform = 'translate-x(100)'; 
		setTimeout(() => {
			setPauseAnimation(true)
		}, 5000);
	}

	const handleClick2 = () => {
		setPauseAnimation(false)
		document.getElementById('rocketRef').style.transform = 'rotate(180deg)'; 
		setTimeout(() => {
			setPauseAnimation(true)
			document.getElementById('rocketRef').style.transform = 'rotate(360deg)'; 
		}, 5000);
	}

    return (
        <div className="background">
			<Scroll.Element name="test1" className="element">
				<section className="container space" id="planets">
					
						<img className="logo" src="homepage/logolvp.svg" alt="logo" />
					
					<div className="planet_container">
						<Link className="planet" to="/dagkliniek">
							<h2>Dagkliniek</h2>
							<img src="homepage/dagkliniek.svg" alt="dagkliniek" />
						</Link>
						<Link className="planet" to="/opname">
							<h2>Opname</h2>
							<img src="homepage/opname.svg" alt="opname" />
						</Link>
						<Link className="planet" to="/consultatie">
							<h2>Consultatie</h2>
							<img src="homepage/consultatie.svg" alt="consultatie" />
						</Link>
					</div>
				</section>
			</Scroll.Element>
            {/*<img
                src="homepage/raket.svg"
                alt="Raket"
                className="rocket"
                style={{bottom: bottomOffset + 'vh'}}
            />*/}
			<Scroll.Link activeClass="active" to="test2" smooth="easeInOutQuart" onClick={handleClick} offset={0} isDynamic={false} duration={4000} delay={0}>
				<div style={{zIndex: 4}} onClick={handleClick2} id='rocketRef' className="rocket">
					<Lottie options={defaultOptions}
						height={400}
						width={400}
						
						isPaused={pauseAnimation}
					/>
				</div>
			</Scroll.Link>
			
			<Scroll.Element name="test2" className="element">
				<section className="container earth" onLoad={generateClouds(8)}>
					<div className="ground" />
					<img className="skyline" src="homepage/skyline_1.svg" alt="Skyline" />
					<img className="hospital" src="homepage/ziekenhuis.svg" alt="Ziekenhuis" />
					<a href="#planets" onClick={handleClick}>to infinity</a>
					<Scroll.Link activeClass="active" to="test1" smooth="easeInOutQuart" onClick={handleClick} offset={0} isDynamic={false} duration={4000} delay={0}>
						Test 2 (delay)
					</Scroll.Link>
					<section className="clouds" id="cloudContainer" ref={ref}>
						<animated.img
							src={'homepage/wolk_3.svg'}
							alt="Cloud"
							className="cloud"
							style={{
								width: '11%',
								top: '40%',
								left: '70%',
								opacity: '0.7',
								transform: offset.interpolate(calc),
							}}
						/>
						<animated.img
							src={'homepage/wolk_1.svg'}
							alt="Cloud"
							className="cloud"
							style={{
								width: '30%',
								top: '0%',
								left: '10%',
								opacity: '1',
								transform: offset.interpolate(calc),
							}}
						/>
						<animated.img
							src={'homepage/wolk_1.svg'}
							alt="Cloud"
							className="cloud"
							style={{
								width: '17%',
								top: '60%',
								left: '30%',
								opacity: '0.8',
								transform: offset.interpolate(calc),
							}}
						/>
						<animated.img
							src={'homepage/wolk_3.svg'}
							alt="Cloud"
							className="cloud"
							style={{
								width: '15%',
								top: '40%',
								left: '0%',
								opacity: '0.5',
								transform: offset.interpolate(calc),
							}}
						/>
						<animated.img
							src={'homepage/wolk_1.svg'}
							alt="Cloud"
							className="cloud"
							style={{
								width: '24%',
								top: '10%',
								left: '60%',
								opacity: '1',
								transform: offset.interpolate(calc),
							}}
						/>
					</section>
				</section>
			</Scroll.Element>
        </div>
    );
}
