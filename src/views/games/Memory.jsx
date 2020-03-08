import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../sass/games/_fonts.scss';
import '../../sass/games/_memory.scss';

// SVGS


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
        let cardsArray = ['beer', 'mondmasker', 'olivia', 'spuit', 'stetoscoop', 'thermometer', 'MRI', 'INFUUS', 'OTTOSCOOP']
        let count = 0;
        let amountCards = this.state.cards / 2
        document.querySelector('.memory-game').innerHTML = "";
        for (let i = 0; i < amountCards; i++){
            const div = `<div id="${i+count}" class="memory-card" data-framework="${cardsArray[i]}"> <img class="front-face" src="games/memory/${cardsArray[i]}.svg" alt="${cardsArray[i]}" /> <div class="back-face"></div> </div>`;
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
        if (this.state.sound === true) {
            this.setState({
                sound: false
            })
            soundOn.classList.add('hide')
            soundOff.classList.remove('hide')
        } else if (this.state.sound === false) {
            this.setState({
                sound: true
            })
            soundOn.classList.remove('hide')
            soundOff.classList.add('hide')
        }
    }

    render() {
        return (
            <div class="memory-body-container">
                <div className="navbar">
                    <Link className="back" to="/"><img src="homepage/terug.svg" alt="terug" /></Link>
                </div>


                <div className="playAgain-container hide">
                    <div>
                        <h3>Nog eens spelen?</h3>
                        <button onClick={this.playAgain}>Ja</button>
                        <button onClick={this.dontPlayAgain}>Nee</button>
                        <p id="percentage"></p>
                    </div>
                </div>

                <audio id="sound-right">
                    <source src="sound/right.mp3" type="audio/ogg"/>
                </audio>
                <audio id="sound-wrong">
                    <source src="sound/wrong.mp3" type="audio/ogg"/>
                </audio>
                
                <div className="icons">
                    <a href="/game-memory-info"><img id="info-icon" onClick={this.info} src="games/memory/info-icon.svg" alt="info"/></a>
                    <img id="soundOn" onClick={this.editSoundLevel} className="speaker-icon" src="games/memory/sound_on.svg" alt="sound on" />
                    <img id="soundOff" onClick={this.editSoundLevel} className="speaker-icon hide" src="games/memory/sound_off.svg" alt="sound off" />
                </div>
                
                <div className="game-container">
                    <h1>Memory Spel</h1>
                    <div className="lvl-btn-container">
                        <button className="makkelijk" onClick={this.changeLevel}>Makkelijk</button>
                        <button className="standaard" onClick={this.changeLevel}>Normaal</button>
                        <button className="moeilijk" onClick={this.changeLevel}>Moeilijk</button>
                    </div>

                    <div className="memory-game-container">
                        <section className="memory-game"></section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Memory

// PICK RANDOM CARDS OUT OF ARRAY, PUSH THOSE NAMES IN ARRAY
// FIRST TIME CHECK IF NAMES AREN'T IN ARRAY, SECOND TIME READ ARRAY ONE BY ONE
// 
// SLIDE SHOW |-| |-| |-| <- 3 kaartjes, duw op next en tekst veranderd
// 