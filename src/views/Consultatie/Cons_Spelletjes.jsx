import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
<<<<<<< HEAD:src/views/Cons_Spelletjes.jsx
=======
import animationData from '../loadingAni.json'
>>>>>>> origin:src/views/Consultatie/Cons_Spelletjes.jsx
import * as Scroll from 'react-scroll';
import animationData from './loadingAni.json';


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Cons_Spelletjes() {
  return (
    <section className="container space" id="planets">
      {/* <div className="loading">
                <div className="rocket_ani">
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
<<<<<<< HEAD:src/views/Cons_Spelletjes.jsx
            </div> */}
      <a href="https://www.olvz.be">
        <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
      </a>

      <div className="navbar">
        <Link className="back" to="/consultatie"><img src="/homepage/terug.svg" alt="terug" /></Link>
      </div>

      <div className="heading_container">
        <h1 className="planetName">Spelletjes</h1>
      </div>
=======
            </div>*/}
            <div className="heading_container">
                <Link className="back" to="/"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Spelletjes</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>
>>>>>>> origin:src/views/Consultatie/Cons_Spelletjes.jsx

      <div className="planet_container_C">
        <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
        <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
      </div>

      <div className="container_content_spel">
        <div className="container_action_spel">

<<<<<<< HEAD:src/views/Cons_Spelletjes.jsx
          <Link className="game" to="#">
            <img src="/spelletjes_page/rugzak.svg" alt="game" />
          </Link>

          <Link className="game" to="/consultatie/spelletjes/virusspel">
            <img src="/spelletjes_page/virusspel.svg" alt="game" />
          </Link>

          <Link className="game" to="/consultatie/spelletjes/lichaamspel">
            <img src="/spelletjes_page/lichaamspel.svg" alt="game" />
          </Link>

          <Link className="game" to="/consultatie/spelletjes/memory">
            <img src="/spelletjes_page/memory.svg" alt="game" />
          </Link>

          <img className="olivia-rocket" src="/spelletjes_page/olivia-raket.svg" alt="olivia" />
        </div>
        <img className="planet_bg_spel" src="/homepage/consultatie_bg.svg" alt="planet" />
      </div>
    </section>
  );
}
=======
                    <Link className="game" to="#" >
                        <h2>Rugzakspel</h2>
                        <img src="/spelletjes_page/rugzak.svg" alt="game" />
                    </Link>

                    <Link className="game" to="/consultatie/spelletjes/virusspel" >
                        <h2>Virusspel</h2>
                        <img src="/spelletjes_page/virusspel.svg" alt="game" />
                    </Link>

                    <Link className="game" to="#" >
                        <h2>Lichaamspel</h2>
                        <img src="/spelletjes_page/lichaamspel.svg" alt="game" />
                    </Link>

                    <Link className="game" to="/consultatie/spelletjes/memory" >
                        <h2>Memory</h2>
                        <img src="/spelletjes_page/memory.svg" alt="game" />
                    </Link>

                    <img className="olivia-rocket" src="/spelletjes_page/olivia-raket.svg" alt="olivia" />
                </div>
                <div className="planet_bg">
                    <img src="/homepage/consultatie_bg.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}
>>>>>>> origin:src/views/Consultatie/Cons_Spelletjes.jsx
