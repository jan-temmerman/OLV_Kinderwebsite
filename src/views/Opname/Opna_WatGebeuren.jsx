import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Opna_WatGebeuren() {

    var ctScan = new Audio('/audio/ct.wav');
    var echo = new Audio('/audio/echo.wav');
    var eeg = new Audio('/audio/eeg.wav');
    var kalinox = new Audio('/audio/kalinox.wav');
    var mri = new Audio('/audio/mri.wav');
    var npa = new Audio('/audio/npa.wav');
    var lactosetest = new Audio('/audio/lactosetest.wav');
    var ruggenprik = new Audio('/audio/ruggenprik.wav');

    const [ctScan_uitl, setCtScan_uitl] = useState(new Audio('/audio/ct_uitl.wav'))
    const [echo_uitl, setEcho_uitl] = useState(new Audio('/audio/echo_uitl.wav'))
    const [eeg_uitl, setEeg_uitl] = useState(new Audio('/audio/eeg_uitl.wav'))
    const [kalinox_uitl, setKalinox_uitl] = useState(new Audio('/audio/kalinox_uitl.wav'))
    const [mri_uitl, setMri_uitl] = useState(new Audio('/audio/mri_uitl.wav'))
    const [npa_uitl, setNpa_uitl] = useState(new Audio('/audio/npa_uitl.wav'))
    const [infuus, setInfuus] = useState(new Audio('/audio/infuus.wav'))
    const [lactosetest_uitl, setLactosetest_uitl] = useState(new Audio('/audio/lactosetest_uitl.wav'))
    const [ruggenprik_uitl, setRuggenprik_uitl] = useState(new Audio('/audio/ruggenprik_uitl.wav'))

    const [audio, setAudio] = useState("")

    useEffect(() => {
        setAudio(new Audio('/audio/wat_gebeuren.wav'))

        localStorage.setItem("silencePreviousPage", true)

        return () => {
            stopAudio()
        }
    }, [])

    const stopAudio = () => {
        ctScan_uitl.pause()
        echo_uitl.pause()
        eeg_uitl.pause()
        kalinox_uitl.pause()
        mri_uitl.pause()
        npa_uitl.pause()
        lactosetest_uitl.pause()
        ruggenprik_uitl.pause()
        infuus.pause()
    }

    useEffect(() => {
        if(audio !== "")
            audio.play();
        return
    }, [audio])

    const [modal, setModal] = useState("")

    const showModal = (imagePath, title) => {

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
                ctScan.onended = () => {
                    ctScan_uitl.currentTime = 0
                    ctScan_uitl.play();
                };
                ctScan.play();
                break

            case "ECHO":
                echo.onended = () => {
                    echo_uitl.currentTime = 0
                    echo_uitl.play();
                };
                echo.play();
                break

            case "EEG":
                eeg.onended = () => {
                    eeg_uitl.currentTime = 0
                    eeg_uitl.play();
                };
                eeg.play();
                break

            case "KALINOX":
                kalinox.onended = () => {
                    kalinox_uitl.currentTime = 0
                    kalinox_uitl.play();
                };
                kalinox.play();
                break

            case "MRI":
                mri.onended = () => {
                    mri_uitl.currentTime = 0
                    mri_uitl.play();
                };
                mri.play();
                break

            case "NPA":
                npa.onended = () => {
                    npa_uitl.currentTime = 0
                    npa_uitl.play();
                };
                npa.play();
                break

            case "INFUUS":
                infuus.currentTime = 0
                infuus.play();
                break

            case "LACTOSETEST":
                lactosetest.onended = () => {
                    lactosetest_uitl.currentTime = 0
                    lactosetest_uitl.play();
                };
                lactosetest.play();
                break

            case "RUGGENPRIK":
                ruggenprik.onended = () => {
                    ruggenprik_uitl.currentTime = 0
                    ruggenprik_uitl.play();
                };
                ruggenprik.play();
                break


            default:
                return
        }

        setTimeout(() => {
            document.getElementById('cross').addEventListener('click', stopAudio)
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