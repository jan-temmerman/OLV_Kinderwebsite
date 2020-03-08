import React, { Component } from 'react'
import '../../sass/games/_fonts.scss';
import '../../sass/games/_memory-info.scss';
import { Link } from "react-router-dom";


export class Info extends Component {
   

    state = {
        i: 0,
        cards: ['beer', 'mondmasker', 'olivia', 'spuit', 'stetoscoop', 'thermometer', 'mri', 'infuus', 'ottoscoop'],
        length: 0
    }


    componentDidMount = () => {
        let cardsArray = this.state.cards
        let length = cardsArray.length
        this.setState({
            length: length
        })

        fetch("./cards.json")
        .then(res => res.json())
        .then(data => console.log(data))

        this.showCard()
    }

    showCard = () => {
        let i = this.state.i
        let cardsArray = this.state.cards
        document.getElementById('title').innerHTML = cardsArray[i]
        document.getElementById(`card-one`).innerHTML = `<img class="card-icon" src="games/memory/${cardsArray[i]}.svg"/>`
    }

    nextCard = () => {
        let i = this.state.i
        let length = this.state.length
        console.log(i)
        if (i< length-1) {
            this.setState({
                i: i+1
            })
            setTimeout(() => {
                this.showCard()
              }, 50);
        }
    }

    previousCard = () => {
        let i = this.state.i
        if (i>0) {
            this.setState({
                i: i-1
            })
            setTimeout(() => {
                this.showCard()
              }, 50);
        }
    }


    render() {
        return (
            <div className="memory-info-body-container">
                <a href="game-memory"><img className="memory-icon" src="games/memory/memory-icon.svg" alt="memory-icon"/></a>
                <div className="navbar">
                    <Link className="back" to="/game-memory"><img src="homepage/terug.svg" alt="terug" /></Link>
                </div>
                <div>
                    <div className="memory-cards-container">
                        <div id="card-one" className="cards"></div>
                        <div id="icons-container">
                            <img onClick={this.previousCard} id="pijltje-terug" className="pijltje" src="games/memory/pijltje.svg" alt="terug" />
                            <img className="pijltje middle-icon" src="games/memory/explain-icon.svg" alt="explain" />
                            <img  onClick={this.nextCard} id="pijltje-volgende" className="pijltje" src="games/memory/pijltje.svg" alt="volgende"/>
                        </div>
                        <div id="text-blok">
                            <h2 id="title"></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro voluptates? Nobis aspernatur nesciunt distinctio molestiae modi, pariatur est qui!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
