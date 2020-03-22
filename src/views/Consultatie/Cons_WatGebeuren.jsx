import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import '../../sass/app.scss';
import '../../sass/views/_watGebeuren.scss';

export default function Cons_WatGebeuren() {
    var allergietest= new Audio('/audio/allergietest.wav');
    var uroflow = new Audio('/audio/uroflow.wav');
    var ekg = new Audio('/audio/ekg.wav');
    var lactosetest= new Audio('/audio/lactosetest.wav');

    const [allergietest_uitl, setAllergietest_uitl] = useState(new Audio('/audio/allergietest_uitl.wav'))
    const [uroflow_uitl, setUroflow_uitl] = useState(new Audio('/audio/uroflow_uitl.wav'))
    const [ekg_uitl, setEkg_uitl] = useState(new Audio('/audio/ekg_uitl.wav'))
    const [lactosetest_uitl, setLactosetest_uitl] = useState(new Audio('/audio/lactosetest_uitl.wav'))

    const [icon1, setIcon1] = useState(<img onClick={() => { playVoiceOver("allergietest") }} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon2, setIcon2] = useState(<img onClick={() => { playVoiceOver("uroflow") }} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon3, setIcon3] = useState(<img onClick={() => { playVoiceOver("ekg") }} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)
    const [icon4, setIcon4] = useState(<img onClick={() => { playVoiceOver("lactosetest") }} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />)

    useEffect(() => {
        let audio = new Audio('/audio/wat_gebeuren.wav');
        audio.play();

        localStorage.setItem("silencePreviousPage", true)

        return () => {
            setAllergietest_uitl(new Audio())
            setUroflow_uitl(new Audio())
            setEkg_uitl(new Audio())
            setLactosetest_uitl(new Audio())

            audio.pause()

            allergietest.pause()
            uroflow.pause()
            ekg.pause()
            lactosetest.pause()

            allergietest_uitl.pause()
            uroflow_uitl.pause()
            ekg_uitl.pause()
            lactosetest_uitl.pause()
        }
    }, [])



    const playVoiceOver = (name) => {

        switch(name) {
            case "allergietest":
                allergietest.play();

                setTimeout(() => {
                        allergietest_uitl.play();

                    setIcon1(
                        <img onClick={() => {
                            setIcon1(<img onClick={() => {playVoiceOver("allergietest")}} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            allergietest_uitl.pause()
                            allergietest_uitl.currentTime = 0
                        }} className="explain_icon pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )
                }, 1500);
                break

            case "uroflow":
                uroflow.play();
                setTimeout(() => {
                    uroflow_uitl.play();

                    setIcon2(
                        <img onClick={() => {
                            setIcon2(<img onClick={() => {playVoiceOver("uroflow")}} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            uroflow_uitl.pause()
                            uroflow_uitl.currentTime = 0
                        }} className="explain_icon pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )
                }, 1500);
                break

            case "ekg":
                ekg.play();
                setTimeout(() => {
                    ekg_uitl.play();

                    setIcon3(
                        <img onClick={() => {
                            setIcon3(<img onClick={() => {playVoiceOver("ekg")}} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            ekg_uitl.pause()
                            ekg_uitl.currentTime = 0
                        }} className="explain_icon pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )
                }, 1500);
                break

            case "lactosetest":
                lactosetest.play();
                setTimeout(() => {
                    lactosetest_uitl.play();

                    setIcon4(
                        <img onClick={() => {
                            setIcon4(<img onClick={() => {playVoiceOver("lactosetest")}} className="explain_icon pointer" src="/watGebeuren_page/explain-icon.svg" alt="explain icon" />);
                            lactosetest_uitl.pause()
                            lactosetest_uitl.currentTime = 0
                        }} className="explain_icon pointer" src="/watGebeuren_page/kruisje.svg" alt="explain icon" />
                    )
                }, 1500);
                break

            default:
                return
            
        }
    }

    return (
        <div>
            <section className="container_WG space" id="planets">
                <div className="heading_container">
                    <Link className="back" to="/consultatie"><img src="/homepage/terug.svg" alt="terug" /></Link>
                    <h1 className="planetName">Wat zal er gebeuren?</h1>
                    <a href="https://www.olvz.be">
                        <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
                    </a>
                </div>

                <div className="planet_container_C">
                    <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
                    <Link className="planet_C" to="/opname"><img src="/homepage/opname.svg" alt="opname" /></Link>
                </div>

                <div className="planet_bg">
                    <img className="olivia" src="/homepage/oliviaMetRaket.svg" alt="olivia" />
                    <img src="/homepage/planeet_consultatie.svg" alt="planet" />
                </div>
            </section>
            <section className="inside">
                <div className="inside_container_WG">
                    <div className="text-image_container">
                        <div>
                        <div className="title-icon_container">
                                <div className="explain_icon" />
                                <h2>Allergietest</h2>
                                {icon1}
                            </div>
                            <p>
                                Op beide armpjes worden 4 lijntjes met balpen getekend. Daarop worden kleine druppeltjes gedaan, dat kan een beetje koud aanvoelen. Met een klein wit staafje wordt een prikje + draaitje gegeven in het druppeltje, dat is geen naald maar je zal dit wel voelen. Daarna wordt het droog gedopt. Het is belangrijk dat je er niet aan krabt, als het jeukt mag je er wel op blazen. na 15 minuten komt de verpleegster of de dokter naar je arm kijken. Soms wordt het rood met een wit bolletje, de verpleegkundige of de dokter zullen dit opmeten. Zo kan je te weten komen aan welke stof of voeding je allergisch bent
                            </p>
                        </div>
                        <div style={{backgroundImage: "url('/watGebeuren_page/fotos/ALLERGIETEST.jpg')"}} />
                    </div>
                    <div className="text-image_container">
                        <div>
                            <div className="title-icon_container">
                                <div className="explain_icon" />
                                <h2>Uroflow</h2>
                                {icon2} 
                           </div>
                            <p>
                                Eerst ga je plassen op ons speciaal toilet, die meet hoeveel en hoe snel je plast. 
                                Daarna kijken we nog even hoeveel pipi er in je buik is achtergebleven
                                Daarvoor komt er eerst een beetje koude gel op je buik.
                                Met een cameratje kunnen we zien of er nog pipi in je buik zit, dit doet allemaal geen pijn tenzij de dokter een beetje te hard duwt natuurlijk
                                Op die manier kunnen we kijken of je problemen hebt met plassen.
                            </p>
                        </div>
                        <div style={{backgroundImage: "url('/watGebeuren_page/fotos/UROFLOW.jpg')"}} />
                    </div>
                    <div className="text-image_container">
                        <div>
                        <div className="title-icon_container">
                                <div className="explain_icon" />
                                <h2>EKG</h2>
                                {icon3}
                            </div>
                            <p>
                                De dokter wil van jouw hart een hartfilmpje of EKG maken. De dokter of de verpleegkundige plakt enkele ronde pleisters of zuignapjes met daaraan draadjes op jouw armen, benen en borstkas. Jij hoeft terwijl niets te doen en kan lekker gaan liggen. De pleisters of zuignapjes kunnen nadien weer makkelijk er af gedaan worden. De draadjes zijn verbonden met een computer die kijkt hoe goed je hart zijn werk doet. Wanneer het hartfilmpje gemaakt is, zal je zien dat uit de printer van het apparaat een blaadje tevoorschijn komt met daarop het rapport van jouw hart. Vraag maar eens aan de dokter of je mag kijken!
                            </p>
                        </div>
                        <div style={{backgroundImage: "url('/watGebeuren_page/fotos/EKG.jpg')"}} />
                    </div>
                    <div className="text-image_container">
                        <div>
                        <div className="title-icon_container">
                                <div className="explain_icon" />
                                <h2>Lactose test</h2>
                                {icon4}
                            </div>
                            <p>
                                Voor en tijdens het onderzoek mag je niet eten. Je zal in het begin van de test een eerste keer moeten blazen om te kijken hoeveel je score dan is. Nadien is het de bedoeling dat je een drankje (lactose) opdrinkt. Nu moet je enkele keren opnieuw blazen, telkens met 30 minuutjes tussen. Op deze manier kan de dokter zien of je wel/niet tegen lactose kan. Na de test mag je terug eten en drinken zoveel je wilt. De resultaten worden nadien met de dokter besproken.
                            </p>
                        </div>
                        <div style={{backgroundImage: "url('/watGebeuren_page/fotos/LACTOSETEST.jpg')"}} />
                    </div>
                </div>
            </section>
        </div>
    );
}
