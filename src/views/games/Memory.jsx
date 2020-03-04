import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../sass/games/_memory.scss';


export class Memory extends Component {
    
    state = {
        firstCard: "",
        secondCard: "",
        sound: true,
        goodAnswer: 0,
        clicks: 0,
    }
    
    componentDidMount = () => {
        document.title = "Spelletjes | Memory"

        let cardsArray = ['beer', 'mondmasker', 'olivia', 'spuit', 'stetoscoop', 'thermometer']
        let count = 0;
        for (let i = 0; i < cardsArray.length; i++){
            console.log(cardsArray[i])
            
            if (count === 0 && i === 5) {
                count++
                i = 0;
            }
        }

        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
        cards.forEach(card => card.addEventListener('click', this.flipCard));
        this.setState({
            clicks: 0,
        })
        this.resetBoard();
    }

    flipCard = (event) => {
        if (this.state.firstCard === "" || this.state.secondCard === "") {
            let parent = event.target.parentNode;
            parent.classList.add('flip');
            if (this.state.firstCard === "") {
                this.setState({
                    firstCard: parent,
                    clicks: this.state.clicks +1,
                })
            } else if (this.state.firstCard !== "") {
                this.setState({
                    secondCard: parent,
                    clicks: this.state.clicks +1,
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
                console.log(this.state.clicks)
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
        this.componentDidMount();
    }

    dontPlayAgain() {
        document.querySelector('.playAgain-container').classList.add('hide');
    }

    resetBoard = () => {
        this.setState({
            firstCard: "",
            secondCard: ""
        })
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

                <div className="playAgain-container hide">
                    <p>Nog eens spelen?</p>
                    <button onClick={this.playAgain}>Ja</button>
                    <button onClick={this.dontPlayAgain}>Nee</button>
                </div>

                <audio id="sound-right">
                    <source src="sound/right.mp3" type="audio/ogg"/>
                </audio>
                <audio id="sound-wrong">
                    <source src="sound/wrong.mp3" type="audio/ogg"/>
                </audio>
                
                <div>
                    <img id="soundOn" onClick={this.editSoundLevel} className="speaker-icon" src="games/memory/sound_on.svg" alt="sound on" />
                    <img id="soundOff" onClick={this.editSoundLevel} className="speaker-icon hide" src="games/memory/sound_off.svg" alt="sound off" />
                </div>

                <div className="memory-game-container">
                <section className="memory-game">
                    <div className="memory-card" data-framework="beer">
                        <img className="front-face" src="games/memory/beer.svg" alt="beer" />
                        <div className="back-face"></div>
                    </div>
                        
                    <div className="memory-card" data-framework="beer">
                    <img className="front-face" src="games/memory/beer.svg" alt="beer" />
                    <div className="back-face"></div>
                    </div>

                    <div className="memory-card" data-framework="mondmasker">
                    <img className="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <div className="back-face"></div>
                    </div>
                    <div className="memory-card" data-framework="mondmasker">
                    <img className="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <div className="back-face"></div>
                    </div>

                    <div className="memory-card" data-framework="olivia">
                    <img className="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <div className="back-face"></div>
                    </div>
                    <div className="memory-card" data-framework="olivia">
                    <img className="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <div className="back-face"></div>
                    </div>

                    <div className="memory-card" data-framework="spuit">
                    <img className="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <div className="back-face"></div>
                    </div>
                    <div className="memory-card" data-framework="spuit">
                    <img className="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <div className="back-face"></div>
                    </div>

                    <div className="memory-card" data-framework="stetoscoop">
                    <img className="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <div className="back-face"></div>
                    </div>
                    <div className="memory-card" data-framework="stetoscoop">
                    <img className="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <div className="back-face"></div>
                    </div>

                    <div className="memory-card" data-framework="thermometer">
                    <img className="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <div className="back-face"></div>
                    </div>
                    <div className="memory-card" data-framework="thermometer">
                    <img className="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <div className="back-face"></div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default Memory
