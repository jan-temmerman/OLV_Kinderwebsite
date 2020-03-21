import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


import '../../sass/app.scss';
import '../../sass/views/_wieiswie.scss';

export default function Cons_WieIsWie() {
      
    useEffect(() => {
        let audio = new Audio('/audio/wie_is_wie.wav');
        audio.play();

        localStorage.setItem("silencePreviousPage", true)

        return
    }, [])

    return(
        <section className="container_WHO space_WHO" id="planets">
            {/*<div className="loading">
                <div className="rocket_ani">
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
            </div>*/}
            <div className="heading_container">
                <Link className="back" to="/consultatie"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Wie is wie?</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
            </div>

            <div className="container_content_WHO">
                <div className="container_action_WHO">
                    <div>
                        <h2 className="name">Medewerker</h2>
                        <div>
                            <img src="/wieiswie_page/medewerker.svg" alt="employee" />
                        </div>
                    </div>
                    <div>
                        <h2 className="name">Dokter</h2>
                        <div>
                            <img src="/wieiswie_page/vrouwelijkedokter.svg" alt="doctor" />
                        </div>
                    </div>
                    <div>
                        <h2 className="name">Verpleegkundige</h2>
                        <div>
                            <img src="/wieiswie_page/verpleger.svg" alt="nurse" />
                        </div>
                    </div>
                </div>
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_consultatie.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}