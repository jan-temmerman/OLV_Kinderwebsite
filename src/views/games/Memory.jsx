import React, { Component } from 'react'
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
        hasFlippedCard: false,
        lockBoard: false,
        firstCard: "",
        secondCard: "",
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
            setTimeout(() => {
                this.state.firstCard.classList.remove('flip')
                this.state.secondCard.classList.remove('flip')
            
                this.resetBoard();
              }, 1500);
        } else if (this.state.firstCard.dataset.framework === this.state.secondCard.dataset.framework) {
            this.state.firstCard.removeEventListener('click', this.flipCard)
            this.state.secondCard.removeEventListener('click', this.flipCard)
            this.resetBoard();
        }
    }

    resetBoard = () => {
        this.setState({
            firstCard: "",
            secondCard: ""
        })
    }

    render() {
        return (
            <div className="memory-game-container">
                <section class="memory-game">
                    <div class="memory-card" data-framework="beer">
                    <img class="front-face" src="games/memory/beer.svg" alt="beer" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="beer">
                    <img class="front-face" src="games/memory/beer.svg" alt="beer" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>

                    <div class="memory-card" data-framework="mondmasker">
                    <img class="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="mondmasker">
                    <img class="front-face" src="games/memory/mondmasker.svg" alt="mondmasker" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>

                    <div class="memory-card" data-framework="olivia">
                    <img class="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="olivia">
                    <img class="front-face" src="games/memory/olivia.svg" alt="olivia" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>

                    <div class="memory-card" data-framework="spuit">
                    <img class="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="spuit">
                    <img class="front-face" src="games/memory/spuit.svg" alt="spuit" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>

                    <div class="memory-card" data-framework="stetoscoop">
                    <img class="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="stetoscoop">
                    <img class="front-face" src="games/memory/stetoscoop.svg" alt="stetoscoop" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>

                    <div class="memory-card" data-framework="thermometer">
                    <img class="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                    <div class="memory-card" data-framework="thermometer">
                    <img class="front-face" src="games/memory/thermometer.svg" alt="thermometer" />
                    <img class="back-face" src="games/memory/back.svg" alt="back" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Memory
