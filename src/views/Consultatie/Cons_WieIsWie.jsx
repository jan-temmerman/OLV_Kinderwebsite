import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import '../../sass/app.scss';
import '../../sass/views/_wieiswie.scss';

export default function Cons_WieIsWie() {

    var verpleegkundige = new Audio('/audio/verpleger.wav');
    var dokter = new Audio('/audio/dokter.wav');
    var medewerker = new Audio('/audio/medewerker.wav');

    const [verpleegkundige_uitl, setVerpleegkundige_uitl] = useState(new Audio('/audio/verpleger_uitl_opname.wav'))
    const [dokter_uitl, setDokter_uitl] = useState(new Audio('/audio/dokter_uitl.wav'))
    const [medewerker_uitl, setMedewerker_uitl] = useState(new Audio('/audio/medewerker_uitl.wav'))

    //const [audio, setAudio] = useState("")
    const [icon1, setIcon1] = useState(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon2, setIcon2] = useState(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon3, setIcon3] = useState(<img onClick={() => {playVoiceOver("medewerker")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
      
    useEffect(() => {
        let audio = new Audio('/audio/wie_is_wie.wav');
        audio.play();

        localStorage.setItem("silencePreviousPage", true)

        return () => {
            setVerpleegkundige_uitl(new Audio())
            setDokter_uitl(new Audio())
            setMedewerker_uitl(new Audio())

            verpleegkundige.pause()
            dokter.pause()
            medewerker.pause()

            verpleegkundige_uitl.pause()
            dokter_uitl.pause()
            medewerker_uitl.pause()
        }
    }, [])

    const playVoiceOver = (name) => {

        switch(name) {
            case "verpleegkundige":
                verpleegkundige.play();

                setTimeout(() => {
                    console.log(verpleegkundige_uitl)
                    verpleegkundige_uitl.play();

                    setIcon1(
                        <img onClick={() => {
                            setIcon1(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            verpleegkundige_uitl.pause();
                            verpleegkundige_uitl.currentTime = 0
                        }} className="explain_icon_cons pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    verpleegkundige_uitl.onended = () => {
                        setIcon1(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "dokter":
                dokter.play();

                setTimeout(() => {
                    dokter_uitl.play()

                    setIcon2(
                        <img onClick={() => {
                            setIcon2(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            dokter_uitl.pause();
                            dokter_uitl.currentTime = 0
                        }} className="explain_icon_cons pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    dokter_uitl.onended = () => {
                        setIcon2(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "medewerker":
                medewerker.play();

                setTimeout(() => {
                    medewerker_uitl.play()

                    setIcon3(
                        <img onClick={() => {
                            setIcon3(<img onClick={() => {playVoiceOver("medewerker")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            medewerker_uitl.pause();
                            medewerker_uitl.currentTime = 0
                        }} className="explain_icon_cons pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    medewerker_uitl.onended = () => {
                        setIcon3(<img onClick={() => {playVoiceOver("medewerker")}} className="explain_icon_cons pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            default:
                return
            
        }
    }

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
                        {icon1}
                        <h2 className="name">Verpleegkundige</h2>
                        <div>
                            <img src="/wieiswie_page/verpleger.svg" alt="nurse" />
                        </div>
                    </div>
                    <div>
                        {icon2}
                        <h2 className="name">Dokter</h2>
                        <div>
                            <img src="/wieiswie_page/vrouwelijkedokter.svg" alt="doctor" />
                        </div>
                    </div>
                    <div>
                        {icon3}
                        <h2 className="name">Medewerker</h2>
                        <div>
                            <img src="/wieiswie_page/medewerker.svg" alt="employee" />
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