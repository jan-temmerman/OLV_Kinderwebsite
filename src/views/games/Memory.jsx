import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../sass/games/_fonts.scss';
import '../../sass/games/_memory.scss';
import BackButton from './rugzak-game/components/BackButton';

import MemoryExplainView from './MemoryExplain';


export class Memory extends Component {
    
    state = {
        firstCard: "",
        secondCard: "",
        sound: true,
        goodAnswer: 0,
        clicks: 0,
        cards: 12,
        percentage: "",
        firstId: "",
    }
    
    componentDidMount = () => {
        this.createGameContainer()
    }

    createGameContainer = () => {
        let cardsArray = ['beer', 'mondmasker', 'olivia', 'spuit', 'stetoscoop', 'thermometer', 'scanner', 'INFUUS', 'OTOSCOOP']
        let cardsArrayRandom = []
        let numberArray = []

        for (let i = 0; cardsArrayRandom.length < cardsArray.length; i++){
            let number = Math.floor(Math.random() * cardsArray.length)
            if (!numberArray.includes(number)) {
                numberArray.push(number)
                let element = cardsArray[number]
                cardsArrayRandom.push(element)
            }
        }

        let count = 0;
        let amountCards = this.state.cards / 2
        document.querySelector('.memory-game').innerHTML = "";
        for (let i = 0; i < amountCards; i++){
            const div = `<div id="${i+count}" class="memory-card" data-framework="${cardsArrayRandom[i]}"> <object class="front-face" data="/games/memory/${cardsArrayRandom[i]}.svg" type="image/svg+xml"></object> <div class="back-face"></div> </div>`;
            document.querySelector('.memory-game').insertAdjacentHTML('afterbegin', div);
            if (count === 0 && i +1 === amountCards) {
                count++
                i = -1;
            }
        }

        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * this.state.cards);
            card.style.order = randomPos;
        });
        cards.forEach(card => card.addEventListener('click', this.flipCard));
        this.setState({
            clicks: 0,
            goodAnswer: 0,
        })

        let level = this.state.cards;
        if (level === 6) {
            cards.forEach(card => card.style.height = 'calc(50% - 10px)')
            cards.forEach(card => card.style.width = 'calc(33.333% - 10px)')
        } else if (level === 18) {
            cards.forEach(card => card.style.height = 'calc(33.333% - 10px)')
            cards.forEach(card => card.style.width = 'calc(16.666% - 10px)')
        }

        this.resetBoard();
    }

    flipCard = (event) => {
        if (this.state.firstCard === "" || this.state.secondCard === "") {
            let parent = event.target.parentNode;
            parent.classList.add('flip');
            let id = event.target.id
            if (this.state.firstCard === "") {
                this.setState({
                    firstCard: parent,
                    clicks: this.state.clicks + 1,
                    firstId: id
                })
                this.state.firstCard.removeEventListener('click', this.flipCard)
            } else if (this.state.firstCard !== "" ) {
                this.setState({
                    secondCard: parent,
                    clicks: this.state.clicks +1,
                })
                this.state.secondCard.removeEventListener('click', this.flipCard)
                this.checkForMatch()
            }
        }
    }

    checkForMatch = () => {
        if (this.state.firstCard.dataset.framework !== this.state.secondCard.dataset.framework) {
            if (this.state.sound === true) {
                document.getElementById('sound-wrong').play();
            }
            setTimeout(() => {
                this.state.firstCard.addEventListener('click', this.flipCard)
                this.state.secondCard.addEventListener('click', this.flipCard)

                this.state.firstCard.classList.remove('flip')
                this.state.secondCard.classList.remove('flip')
                this.resetBoard();
              }, 1500);
        } else if (this.state.firstCard.dataset.framework === this.state.secondCard.dataset.framework) {
            if (this.state.sound === true) {
                document.getElementById('sound-right').play();
            }
            this.state.firstCard.removeEventListener('click', this.flipCard)
            this.state.secondCard.removeEventListener('click', this.flipCard)
            let goodAnswer = this.state.goodAnswer + 1
            this.setState({
                goodAnswer: goodAnswer
            })
            if (this.state.goodAnswer < this.state.cards/2) {
                this.resetBoard();
            } else if (this.state.goodAnswer === this.state.cards/2) {
                let clickPercentage = ((this.state.cards / this.state.clicks)*100).toFixed(2)
                document.getElementById('percentage').innerHTML = 'jouw score: ' + clickPercentage +'%'
                setTimeout(() => {
                    document.querySelector('.playAgain-container').classList.remove('hide');
                }, 1000);
            }
        }
    }

    playAgain = () => {
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.classList.remove('flip'));
        this.setState({
            goodAnswer: 0
        })
        document.querySelector('.playAgain-container').classList.add('hide');
        this.createGameContainer();
    }

    dontPlayAgain = () => {
        document.querySelector('.playAgain-container').classList.add('hide');
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.removeEventListener('click', this.flipCard));

    }

    resetBoard = () => {
        this.setState({
            firstCard: "",
            secondCard: ""
        })
    }

    changeLevel = (event) => {
        let level = event.target.className
        document.querySelector('.playAgain-container').classList.add('hide')
        if (level === 'makkelijk') {
            this.setState({
                cards: 6
            })
        } else if (level === 'standaard') {
            this.setState({
                cards: 12
            })
        } else if (level === 'moeilijk') {
            this.setState({
                cards: 18
            })
        }
        setTimeout(() => {
            this.createGameContainer()
        }, 1);
    }

    editSoundLevel = () => {
        let soundOn = document.getElementById('soundOn')
        let soundOff = document.getElementById('soundOff')
        if (this.state.sound) {
            this.setState({
                sound: false
            })
            soundOn.classList.add('hide')
            soundOff.classList.remove('hide')
        } else if (!this.state.sound) {
            this.setState({
                sound: true
            })
            soundOn.classList.remove('hide')
            soundOff.classList.add('hide')
        }
    }

    render() {
        return (
            <div>
                <div className="back-btn">
                    <BackButton />
                </div>
                <div className="h2-memory">
                    <h2>memoryspel</h2>
                </div>
                <MemoryExplainView/>
            <div class="memory-body-container">
                <div className="play-container">
                    <div className="playAgain-container hide">
                        <div>
                            <h3>Nog eens spelen?</h3>
                            <button onClick={this.playAgain}>Ja</button>
                            <button onClick={this.dontPlayAgain}>Nee</button>
                            <p id="percentage"></p>
                        </div>
                    </div>

                    <div className="explain-container hide">
                        <div>
                            <button id="close-btn-explain" onClick={this.closeExplain}>x</button>
                            <p>Draai 2 kaartjes om, als ze hetzelfde zijn dan heb je het juist. <br />Zijn het 2 verschillende dan draaien je  2 kaartjes weer om. <br />Blijf draaien tot je ze allemaal gevonden hebt!</p>
                        </div>
                    </div>
                    
                    <div className="icons">
                        <a href="/games/memory/info"><img id="info-icon" onClick={this.info} src="/games/memory/info-icon.svg" alt="info"/></a>
                        <img id="soundOn" onClick={this.editSoundLevel} className="speaker-icon" src="/games/memory/sound_on.svg" alt="sound on" />
                        <img id="soundOff" onClick={this.editSoundLevel} className="speaker-icon hide" src="/games/memory/sound_off.svg" alt="sound off" />
                    </div>
                    
                    <div className="game-container">
                        <h1 className="heading">Memory Spel</h1>
                        <div className="lvl-btn-container">
                            <button className="makkelijk" onClick={this.changeLevel}>Makkelijk</button>
                            <button className="standaard" onClick={this.changeLevel}>Normaal</button>
                            <button className="moeilijk" onClick={this.changeLevel}>Moeilijk</button>
                        </div>

                        <div className="memory-game-container">
                            <section className="memory-game"></section>
                        </div>
                        </div>
                        <div className="container-background-game"></div>
                </div>

                


                <audio id="sound-right">
                    <source src="/sound/right.mp3" type="audio/ogg"/>
                </audio>

                <audio id="sound-wrong">
                    <source src="/sound/wrong.mp3" type="audio/ogg"/>
                </audio>

                <audio id="explain-the-game">
                    <source src="/sound/memory/memory.mp3" type="audio/ogg"/>
                </audio>

                <div className="container-rotate-screen">
                    <img src="/rotate-screen.svg" alt="rotate-screen"/>
                </div>

                </div>
            </div>
        )
    }
}

export default Memory