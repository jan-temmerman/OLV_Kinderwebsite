import React, { Component } from 'react'
import '../../../sass/games/_fonts.scss'
import '../../../sass/games/_explain-rugzak.scss'

export class explain extends Component {

    hideStartScreen = () => {
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
            </div>
        )
    }
}

export default explain
