import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Opna_WatGebeuren() {

    useEffect(() => {
        let audio = new Audio('/audio/wat_gebeuren.wav');
        audio.play();

        localStorage.setItem("silencePreviousPage", true)

        return
    }, [])

    const [modal, setModal] = useState("")

    const showModal = (imagePath, title) => {
        let audio = undefined

        setModal(
            <div className="detail_modal">
                <div>
                    <div className="modal_header">
                        <div className="cross"/>
                        <h2>{title}</h2>
                        <img onClick={() => setModal("")} id="cross" className="cross" src="/watGebeuren_page/kruisje.svg" alt="kruisje"/>
                    </div>

                    <div style={{backgroundImage: imagePath}} className="image_container"/>
                </div>
            </div>
        )

        switch(title) {
            case "CT-SCAN":
                audio = new Audio('/audio/ct.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/ct_uitl.wav');
                    audio.play();
                }, 1500);
                break

            case "ECHO":
                audio = new Audio('/audio/echo.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/echo_uitl.wav');
                    audio.play();
                }, 1800);
                break

            case "EEG":
                audio = new Audio('/audio/eeg.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/eeg_uitl.wav');
                    audio.play();
                }, 1500);
                break

            case "KALINOX":
                audio = new Audio('/audio/kalinox.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/kalinox_uitl.wav');
                    audio.play();
                }, 1500);
                break

            case "MRI":
                audio = new Audio('/audio/mri.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/mri_uitl.wav');
                    audio.play();
                }, 1500);
                break

            case "NPA":
                audio = new Audio('/audio/npa.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/npa_uitl.wav');
                    audio.play();
                }, 1500);
                break

            case "INFUUS":
                audio = new Audio('/audio/infuus.wav');
                audio.play();
                break

            case "LACTOSETEST":
                audio = new Audio('/audio/lactosetest.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/lactosetest_uitl.wav');
                    audio.play();
                }, 2000);
                break

            case "RUGGENPRIK":
                audio = new Audio('/audio/ruggenprik.wav');
                audio.play();
                setTimeout(() => {
                    audio = new Audio('/audio/ruggenprik_uitl.wav');
                    audio.play();
                }, 600);
                break


            default:
                return
        }

        setTimeout(() => {
            document.getElementById('cross').addEventListener('click', () => {audio.pause()})
        }, 50);
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
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/EEG.jpg')", "EEG")} className="bel" src="/watGebeuren_page/bellen/EEG.svg" alt="EEG"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/INFUUS.jpg')", "INFUUS")} className="bel" src="/watGebeuren_page/bellen/INFUUS.svg" alt="INFUUS"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/CT.jpg')", "KALINOX")} className="bel" src="/watGebeuren_page/bellen/KALINOX.svg" alt="KALINOX"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/MRI.jpg')", "MRI")} className="bel" src="/watGebeuren_page/bellen/MRI.svg" alt="MRI"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/NPA.jpg')", "NPA")} className="bel" src="/watGebeuren_page/bellen/NPA.svg" alt="NPA"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/LACTOSETEST.jpg')", "LACTOSETEST")} className="bel" src="/watGebeuren_page/bellen/LACTOSETEST.svg" alt="LACTOSETEST"/>
                        <img onClick={() => showModal("url('/watGebeuren_page/fotos/RUGGENPRIK.jpg')", "RUGGENPRIK")} className="bel" src="/watGebeuren_page/bellen/RUGGENPRIK.svg" alt="RUGGENPRIK"/>
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