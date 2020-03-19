import React, { useState } from 'react';
import { Link } from "react-router-dom";


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Opna_WatGebeuren() {

    const [modal, setModal] = useState("")

    const showModal = (imagePath, title) => {
        setModal(
            <div className="detail_modal">
                <div>
                    <div className="modal_header">
                        <div className="cross"/>
                        <h2>{title}</h2>
                        <img onClick={() => setModal("")} className="cross" src="/watGebeuren_page/kruisje.svg" alt="kruisje"/>
                    </div>

                    <div style={{backgroundImage: imagePath}} className="image_container"/>
                </div>
            </div>
        )
    }

    return(
        <section className="container space" id="planets">

            {modal}

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
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "CT-SCAN")} className="bel" src="/watGebeuren_page/bellen/CTSCAN.svg" alt="CTSCAN"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/ECHO.jpg')", "ECHO")} className="bel" src="/watGebeuren_page/bellen/ECHO.svg" alt="ECHO"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "EKG")} className="bel" src="/watGebeuren_page/bellen/EKG.svg" alt="EKG"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "INFUUS")} className="bel" src="/watGebeuren_page/bellen/INFUUS.svg" alt="INFUUS"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "KALINOX")} className="bel" src="/watGebeuren_page/bellen/KALINOX.svg" alt="KALINOX"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/MRI.jpg')", "MRI")} className="bel" src="/watGebeuren_page/bellen/MRI.svg" alt="MRI"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "NPA")} className="bel" src="/watGebeuren_page/bellen/NPA.svg" alt="NPA"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "LACTOSETEST")} className="bel" src="/watGebeuren_page/bellen/LACTOSETEST.svg" alt="LACTOSETEST"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "RUGGENPRIK")} className="bel" src="/watGebeuren_page/bellen/RUGGENPRIK.svg" alt="RUGGENPRIK"/>
                    </div>

                    <img className="olivia_bellenblaas" src="/watGebeuren_page/olivia_belleblaas.svg" alt="Olivia"/>
                </div>
                <div className="planet_bg">
                    <img src="/homepage/planeet_opname.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}