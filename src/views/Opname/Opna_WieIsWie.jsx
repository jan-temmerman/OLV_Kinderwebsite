import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import '../../sass/app.scss';
import '../../sass/views/_wieiswie.scss';

export default function Opna_WieIsWie() {
    var verpleegkundige = new Audio('/audio/verpleger.wav');
    var dokter = new Audio('/audio/dokter.wav');
    var poetshulp = new Audio('/audio/schoonmaak.wav');
    var psycholoog = new Audio('/audio/psycholoog.wav');
    var cliniclown = new Audio('/audio/cliniclowns.wav');

    const [verpleegkundige_uitl, setVerpleegkundige_uitl] = useState(new Audio('/audio/verpleger_uitl_opname.wav'))
    const [dokter_uitl, setDokter_uitl] = useState(new Audio('/audio/dokter_uitl.wav'))
    const [poetshulp_uitl, setPoetshulp_uitl] = useState(new Audio('/audio/schoonmaak_uitl.wav'))
    const [psycholoog_uitl, setPsycholoog_uitl] = useState(new Audio('/audio/psycholoog_uitl.wav'))
    const [cliniclown_uitl, setCliniclown_uitl] = useState(new Audio('/audio/cliniclowns_uitl.wav'))

    const [audio, setAudio] = useState("")
    const [icon1, setIcon1] = useState(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon2, setIcon2] = useState(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon3, setIcon3] = useState(<img onClick={() => {playVoiceOver("poetshulp")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon4, setIcon4] = useState(<img onClick={() => {playVoiceOver("psycholoog")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon5, setIcon5] = useState(<img onClick={() => {playVoiceOver("cliniclown")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)

    useEffect(() => {
        setAudio(new Audio('/audio/wie_is_wie.wav'))

        localStorage.setItem("silencePreviousPage", true)

        return () => {
            setVerpleegkundige_uitl(new Audio())
            setDokter_uitl(new Audio())
            setPoetshulp_uitl(new Audio())
            setPsycholoog_uitl(new Audio())
            setCliniclown_uitl(new Audio())

            verpleegkundige.pause()
            dokter.pause()
            poetshulp.pause()
            psycholoog.pause()
            cliniclown.pause()

            verpleegkundige_uitl.pause()
            dokter_uitl.pause()
            poetshulp_uitl.pause()
            psycholoog_uitl.pause()
            cliniclown_uitl.pause()
        }
    }, [])

    useEffect(() => {
        if(audio !== "")
            audio.play();
        return
    }, [audio])

    const playVoiceOver = (name) => {

        switch(name) {
            case "verpleegkundige":
                verpleegkundige.play();

                setTimeout(() => {
                    console.log(verpleegkundige_uitl)
                    verpleegkundige_uitl.play();

                    setIcon1(
                        <img onClick={() => {
                            setIcon1(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            verpleegkundige_uitl.pause();
                            verpleegkundige_uitl.currentTime = 0
                        }} className="explain_icon_opname pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    verpleegkundige_uitl.onended = () => {
                        setIcon1(<img onClick={() => {playVoiceOver("verpleegkundige")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "dokter":
                dokter.play();

                setTimeout(() => {
                    dokter_uitl.play()

                    setIcon2(
                        <img onClick={() => {
                            setIcon2(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            dokter_uitl.pause();
                            dokter_uitl.currentTime = 0
                        }} className="explain_icon_opname pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    dokter_uitl.onended = () => {
                        setIcon2(<img onClick={() => {playVoiceOver("dokter")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "poetshulp":
                poetshulp.play();

                setTimeout(() => {
                    poetshulp_uitl.play()

                    setIcon3(
                        <img onClick={() => {
                            setIcon3(<img onClick={() => {playVoiceOver("poetshulp")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            poetshulp_uitl.pause();
                            poetshulp_uitl.currentTime = 0
                        }} className="explain_icon_opname pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    poetshulp_uitl.onended = () => {
                        setIcon3(<img onClick={() => {playVoiceOver("poetshulp")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "psycholoog":
                psycholoog.play();

                setTimeout(() => {
                    psycholoog_uitl.play()

                    setIcon4(
                        <img onClick={() => {
                            setIcon4(<img onClick={() => {playVoiceOver("psycholoog")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            psycholoog_uitl.pause();
                            psycholoog_uitl.currentTime = 0
                        }} className="explain_icon_opname pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    psycholoog_uitl.onended = () => {
                        setIcon4(<img onClick={() => {playVoiceOver("psycholoog")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            case "cliniclown":
                cliniclown.play();

                setTimeout(() => {
                    cliniclown_uitl.play()

                    setIcon5(
                        <img onClick={() => {
                            setIcon5(<img onClick={() => {playVoiceOver("cliniclown")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            cliniclown_uitl.pause();
                            cliniclown_uitl.currentTime = 0
                        }} className="explain_icon_opname pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )

                    cliniclown_uitl.onended = () => {
                        setIcon5(<img onClick={() => {playVoiceOver("cliniclown")}} className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                    }
                }, 1500);
                break

            default:
                return
            
        }
    }

    return(
        <section className="container_WHO space_WHO" id="planets">
            <div className="heading_container">
                <Link className="back" to="/opname"><img src="/homepage/terug.svg" alt="terug" /></Link>
                <h1 className="planetName">Wie is wie?</h1>
                <a href="https://www.olvz.be">
                    <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                </a>
            </div>

            <div className="planet_container_C">
                <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
            </div>
            <div className="container_content_opna_WHO">
                <div className="carousel_container">
                    <Carousel 
                    arrowLeft={<img className="carousel_arrow" src="/homepage/terug.svg" alt="terug" />}
                    arrowRight={<img className="carousel_arrow" src="/homepage/verder.svg" alt="volgende" />}
                    addArrowClickHandler
                    infinite
                    >
                        <div className="person_card">
                            {icon1}
                            <h2 className="name">Verpleegkundige</h2>
                            <div>
                                <img src="/wieiswie_page/verpleegster.svg" alt="nurse" />
                            </div>
                        </div>
                        <div className="person_card">
                            {icon2}
                            <h2 className="name">Dokter</h2>
                            <div>
                                <img src="/wieiswie_page/mannelijkedokter.svg" alt="doctor" />
                            </div>
                        </div>
                        <div className="person_card">
                            {icon3}
                            <h2 className="name">Poetshulp</h2>
                            <div>
                                <img src="/wieiswie_page/kuisvrouw.svg" alt="cleaning" />
                            </div>
                        </div>
                        <div className="person_card">
                            <img className="explain_icon_opname pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />
                            <h2 className="name">Medewerker</h2>
                            <div>
                                <img src="/wieiswie_page/medewerker.svg" alt="employee" />
                            </div>
                        </div>
                        <div className="person_card">
                            {icon4}
                            <h2 className="name">Psycho - sociaal begeleider</h2>
                            <div>
                                <img src="/wieiswie_page/vrijwilliger.svg" alt="voulunteer" />
                            </div>
                        </div>
                        <div className="person_card">
                            {icon5}
                            <h2 className="name">Clini clown</h2>
                            <div>
                                <img src="/wieiswie_page/vrouwelijkeclown.svg" alt="clown" />
                            </div>
                        </div>
                    </Carousel>
                </div>
                
                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_opname.svg" alt="planet" />
                </div>
            </div>
        </section>
    )
}