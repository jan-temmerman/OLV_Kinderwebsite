import React, { Component } from 'react'
import '../../sass/games/_fonts.scss';
import '../../sass/games/_memory-info.scss';
import { Link } from "react-router-dom";


export class Info extends Component {
   

    state = {
        i: "",
        cards: ['beer', 'mondmasker', 'olivia', 'spuit', 'stetoscoop', 'thermometer', 'mri', 'infuus', 'ottoscoop'],
        length: 0
    }


    componentDidMount = () => {
        let cardsArray = this.state.cards
        let length = cardsArray.length
        let randomNumber = Math.random() * length
        let i = Math.floor(randomNumber)
        this.setState({
            length: length,
            i: i
        })
        setTimeout(() => {
            this.showCard()
        }, 50);
    }

    showCard = () => {
        let i = this.state.i
        let data = require('./cards.json');
        document.getElementById('title').innerHTML = data[i].name
        document.getElementById('text').innerHTML = data[i].explanation
        document.getElementById('container-audio-control').innerHTML = `<audio id="control-audio-explanation"><source id="audio-file" src="${data[i].audio}" type="audio/ogg"/></audio>`
        document.getElementById(`card-one`).innerHTML = `<img class="card-icon" src="/games/memory/${data[i].name}.svg"/>`
    }

    nextCard = () => {
        document.getElementById('control-audio-explanation').pause()
        document.getElementById('control-audio-explanation').currentTime = 0;
        let i = this.state.i
        let length = this.state.length
        if (i< length-1) {
            this.setState({
                i: i+1
            })
        } else {
            this.setState({
                i: 0
            })
        }
        setTimeout(() => {
            this.showCard()
        }, 50);
    }

    previousCard = () => {
        document.getElementById('control-audio-explanation').pause()
        document.getElementById('control-audio-explanation').currentTime = 0;
        let i = this.state.i
        if (i>0 && i !== 0) {
            this.setState({
                i: i-1
            })
        } else {
            let max = this.state.length -1
            this.setState({
                i: max
            })
        }
        setTimeout(() => {
            this.showCard()
        }, 50);
    }

    explainCard = () => {
        let audio = document.getElementById('control-audio-explanation')
        audio.currentTime = 0
        audio.play()
        console.log('tits')
    }


    render() {
        return (
            <div className="memory-info-body-container">
                <a href="/games/memory"><img className="memory-icon" src="/games/memory/memory-icon.svg" alt="memory-icon"/></a>
                <div className="navbar">
                    <Link className="back back-btn" to="/games/memory"><img src="/homepage/terug.svg" alt="terug" /></Link>
                </div>
                <div>
                    <div className="memory-cards-container">
                        <div id="card-one" className="cards"></div>
                        <div id="icons-container">
                            <img onClick={this.previousCard} id="pijltje-terug" className="pijltje" src="/games/memory/pijltje.svg" alt="terug" />
                            <img onClick={this.explainCard} className="pijltje middle-icon"  id="explain-card" src="/games/memory/explain-icon.svg" alt="explain" />
                            <img  onClick={this.nextCard} id="pijltje-volgende" className="pijltje" src="/games/memory/pijltje.svg" alt="volgende"/>
                        </div>
                        <div id="text-blok">
                            <h2 id="title"></h2>
                            <p id="text"></p>
                        </div>
                        <div id="container-audio-control"></div>
                    </div>
                    <div className="container-rotate-portrait">
                        <img src="/rotate-screen-to-portrait.svg" alt="to portrait"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
