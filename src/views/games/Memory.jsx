import React, { Component } from 'react'
import '../../sass/games/_memory.scss';


export class Memory extends Component {
    
    componentDidMount = () => {
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.addEventListener('click', this.flipCard));
    }

    state = {
        hasFlippedCard: false,
        lockBoard: false,
        firstCard: "",
        secondCard: "",
    }

    flipCard = (event) => {
        
    }

    render() {
        return (
            <div className="memory-game-container">
                <section class="memory-game">
                    <div class="memory-card" data-framework="aurelia">
                    <img class="front-face" src="games/memory/virus_monster_1.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="aurelia">
                    <img class="front-face" src="games/memory/virus_monster_1.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>

                    <div class="memory-card" data-framework="vue">
                    <img class="front-face" src="games/memory/virus_monster_2.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="vue">
                    <img class="front-face" src="games/memory/virus_monster_2.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>

                    <div class="memory-card" data-framework="angular">
                    <img class="front-face" src="games/memory/virus_monster_3.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="angular">
                    <img class="front-face" src="games/memory/virus_monster_3.svg" alt="monster" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>

                    <div class="memory-card" data-framework="ember">
                    <img class="front-face" src="games/memory/raket.svg" alt="raket" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="ember">
                    <img class="front-face" src="games/memory/raket.svg" alt="raket" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>

                    <div class="memory-card" data-framework="backbone">
                    <img class="front-face" src="games/memory/olivia_&_oliver.svg" alt="olivia_&_oliver" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="backbone">
                    <img class="front-face" src="games/memory/olivia_&_oliver.svg" alt="olivia_&_oliver" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>

                    <div class="memory-card" data-framework="react">
                    <img class="front-face" src="games/memory/ziekenhuis.svg" alt="ziekenhuis" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                    <div class="memory-card" data-framework="react">
                    <img class="front-face" src="games/memory/ziekenhuis.svg" alt="ziekenhuis" />
                    <img class="back-face" src="games/memory/olivia.svg" alt="JS Badge" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Memory
