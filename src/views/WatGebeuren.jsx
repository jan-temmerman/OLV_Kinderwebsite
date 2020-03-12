import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';


import '../sass/app.scss';
import '../sass/views/_watGebeuren.scss';

export default function WatGebeuren() {
    return (
        <div>
            <section className="container_WG space" id="planets">
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>

                <div className="navbar">
                    <Link className="back" to="/consultatie"><img src="/homepage/terug.svg" alt="terug" /></Link>
                </div>

                <div className="heading_container">
                    <h1 className="planetName">Wat zal er gebeuren?</h1>
                </div>

                <div className="planet_container_C">
                    <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                    <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
                </div>

                <div className="container_content_WG">
                    <img className="planet_bg" src="/homepage/consultatie_bg.svg" alt="planet" />
                </div>
            </section>
            <section className="inside">
                <div className="inside_container">
                    <div>
                        <div>
                            <h2>Echografie</h2>
                            <p>Met een echografie kan de dokter jouw organen bekijken. De dokter doet dit door gel op een soort deegrolletje te brengen. Met de gel en het rolletje rolt hij over jouw buik. Dit doet geen pijn, maar kan wel wat kriebelen en koud aanvoelen. Jouw buik wordt goed onderzocht. De dokter ziet dit op een TV- scherm naast hem. Om het scherm goed te kunnen zien, kan het wat donker zijn in de kamer. Op het einde veegt de dokter de gel weg en je buik schoon. De echo is dan afgelopen.</p>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <h2>MRI-scan</h2>
                            <p>Een MRI- scan neemt foto’s van de binnenkant van je lichaam. Een MRI scanner is een grote donut waar je ingeschoven wordt door de dokter. Je gaat liggen op het tafeltje en krijgt een hoofdsteun. Je krijgt ook een hoofdtelefoon want de machine kan lawaai maken. Het is belangrijk om goed stil te liggen, want alleen dan krijgen we mooie foto’s en kunnen we kijken hoe het met jou gaat. Mama of papa wachten naast jou.</p>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <h2>EEG</h2>
                            <p>Door een EEG uit te voeren, kunnen de dokters zien wat er allemaal in je hoofd gebeurt. Zo kunnen ze bijvoorbeeld zien of je epilepsie hebt of niet. Er wordt een gel op je hoofd gesmeerd waarop een speciale muts wordt gezet. Het kan dat er aan jou gevraagd wordt om bepaalde dingen te doen zoals bijvoorbeeld eens je ogen te sluiten en terug te openen. Of bijvoorbeeld naar een scherm te kijken met verschillende patronen. Nadien mag de muts terug weg en kan je je hoofd wat afkuisen. De dokters krijgt nu een papier met veel lijntjes te zien en kan zo bekijken wat er in je hoofd gebeurd is. </p>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <h2>CT scan</h2>
                            <p>Een CT scan dient om foto’s te nemen van de binnenkant van je lichaam om het zo te kunnen onderzoeken. Mama of papa mag bij jou blijven en krijgt een speciale jas aan Je moet op een soort bed gaan liggen dat in een grote machine ligt, deze machine maakt een zoemend geluid. Je moet heel goed stil liggen zo krijg je de mooiste foto’s.</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
