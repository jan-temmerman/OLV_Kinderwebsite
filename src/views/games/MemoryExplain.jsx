import React, { Component } from 'react'
import '../../sass/games/_fonts.scss'
import '../../sass/games/_explain-rugzak.scss'

export class MemoryExplain extends Component {

    hideStartScreen = () => {
        document.querySelector('.container-explain-memory').classList.add('hide')
    }

    render() {
        return (
            <div className="container-explain-memory">
                <div className="container-explain-memory-child">
                    <p>Draai 2 kaartjes om, als ze hetzelfde zijn dan heb je het juist. Zijn het 2 verschillende dan draaien je  2 kaartjes weer om. Blijf draaien tot je ze allemaal gevonden hebt!</p>
                    <div><button onClick={this.hideStartScreen}>start</button></div>
                    <div className="container-image-explain">
                        <img className="image-explain" src="/games/memory/false.svg" alt="fout" />
                        <img className="image-explain" src="/games/memory/true.svg" alt="juist"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryExplain
