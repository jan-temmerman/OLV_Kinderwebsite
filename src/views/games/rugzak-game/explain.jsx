import React, { Component } from 'react'
import '../../../sass/games/_fonts.scss'
import '../../../sass/games/_explain-rugzak.scss'

export class explain extends Component {

    componentDidMount = () => {
        document.getElementById('explain-the-game-rugzak').currentTime = 0
        document.getElementById('explain-the-game-rugzak').play()
    }

    hideStartScreen = () => {
        document.getElementById('explain-the-game-rugzak').pause()
        document.getElementById('explain-the-game-rugzak').currentTime = 0
        document.querySelector('.container-explain-rugzak').classList.add('hide')
    }

    render() {
        return (
            <div className="container-explain-rugzak">
                <div className="container-explain-rugzak-child">
                    <p>Wanneer je naar het ziekenhuis komt mag je bepaalde dingen meenemen en moet je andere dingen thuis laten. Weet jij wat je allemaal mag meebrengen?</p>
                    <div><button onClick={this.hideStartScreen}>start</button></div>
                    <div className="container-image-explain">
                        <img className="image-explain" src="/games/rugzakspel/rugzak_fout.svg" alt="rugzak fout" />
                        <img className="image-explain" src="/games/rugzakspel/rugzak_juist.svg" alt="rugzak juist"/>
                    </div>
                </div>
                <audio id="explain-the-game-rugzak">
                    <source src="/sound/rugzak_uitleg.mp3" type="audio/ogg"/>
                </audio>
            </div>
        )
    }
}

export default explain
