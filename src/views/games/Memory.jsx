import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../sass/games/_memory.scss';


export class Memory extends Component {
    
    componentDidMount = () => {
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
        cards.forEach(card => card.addEventListener('click', this.flipCard));
    }

    state = {
        firstCard: "",
        secondCard: "",
        sound: true,
        goodAnswer: 0,
    }

    flipCard = (event) => {
        if (this.state.firstCard === "" || this.state.secondCard === "") {
            let parent = event.target.parentNode;
            parent.classList.add('flip');
            if (this.state.firstCard === "") {
                this.setState({
                    firstCard: parent
                })
                console.log(this.state.firstCard)
            } else if (this.state.firstCard !== "") {
                this.setState({
                    secondCard: parent
                })
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
            if (this.state.goodAnswer < 6) {
                this.resetBoard();
            } else if (this.state.goodAnswer === 6) {
                this.playAgain();
            }
        }
    }

    resetBoard = () => {
        this.setState({
            firstCard: "",
            secondCard: ""
        })
    }

    playAgain() {
        
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
            <div>
                <div className="navbar">
                    <Link className="back" to="/"><img src="homepage/terug.svg" alt="terug" /></Link>
                </div>

                {/* <div class="playAgain-container">
                    <p>Nog eens spelen?</p>
                    <button>Ja</button>
                    <button>Nee</button>
                </div> */}

                <audio id="sound-right">
                    <source src="sound/right.mp3" type="audio/ogg"/>
                </audio>
                <audio id="sound-wrong">
                    <source src="sound/wrong.mp3" type="audio/ogg"/>
                </audio>
                
                <div>
                    <img id="soundOn" onClick={this.editSoundLevel} class="speaker-icon" src="games/memory/sound_on.svg" alt="sound on" />
                    <img id="soundOff" onClick={this.editSoundLevel} class="speaker-icon hide" src="games/memory/sound_off.svg" alt="sound off" />
                </div>

                <div className="memory-game-container">
                <section class="memory-game">
                    <div class="memory-card" data-framework="beer">
                    <img class="front-face" src="games/memory/beer.svg" alt="beer" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="beer">
                    <img class="front-face" src="games/memory/beer.svg" alt="beer" />
                    <div class="back-face"></div>
                    </div>

                    <div class="memory-card" data-framework="mondmasker">
                    <img class="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="mondmasker">
                    <img class="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <div class="back-face"></div>
                    </div>

                    <div class="memory-card" data-framework="olivia">
                    <img class="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="olivia">
                    <img class="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <div class="back-face"></div>
                    </div>

                    <div class="memory-card" data-framework="spuit">
                    <img class="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="spuit">
                    <img class="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <div class="back-face"></div>
                    </div>

                    <div class="memory-card" data-framework="stetoscoop">
                    <img class="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="stetoscoop">
                    <img class="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <div class="back-face"></div>
                    </div>

                    <div class="memory-card" data-framework="thermometer">
                    <img class="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <div class="back-face"></div>
                    </div>
                    <div class="memory-card" data-framework="thermometer">
                    <img class="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <div class="back-face"></div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default Memory
