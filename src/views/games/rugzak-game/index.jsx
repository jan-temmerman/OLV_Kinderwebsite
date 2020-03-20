import React, { Component } from 'react'
import '../../../sass/games/_fonts.scss'
import '../../../sass/games/_rugzak.scss'
import { Link } from "react-router-dom";

export class index extends Component {

    state = {
        answers: 0,
        right: 0,
        sound: true
    }

    componentDidMount = () => {
        let btns = document.querySelectorAll('.clickable')
        btns.forEach(btn => {
            let randomPos = Math.floor(Math.random() * 9);
            btn.style.order = randomPos;
            btn.addEventListener('click', this.checkResult)
        });

        document.querySelector('.container-h2').addEventListener('click', this.hideTitle)
    }

    checkResult = (e) => {
        e.target.parentNode.removeEventListener('click', this.checkResult)
        let target = e.target.parentNode.dataset.framework
        e.target.insertAdjacentHTML('beforebegin', `<img class="result-icon" src="/${target}.svg" alt="${target}"/>`);
        document.querySelector('.audio-rugzak').innerHTML = `<audio id="control-audio-rugzak"><source src="/sound/${target}.mp3" type="audio/ogg"/></audio>`
        if (this.state.sound) {
            document.getElementById('control-audio-rugzak').play()
        }
        this.setState({
            answers: this.state.answers +1
        })

        if (target === 'right') {
            this.setState({
                right: this.state.right +1
            })
            if (this.state.right === 5) {
                let btns = document.querySelectorAll('.clickable')
                btns.forEach(btn => {
                    btn.removeEventListener('click', this.checkResult)
                });
                
                setTimeout(() => {
                    let score = ((this.state.right/this.state.answers)*100).toFixed(2)
                    document.getElementById('percentage').innerHTML = "jouw score: " + score + "%"
                    document.querySelector('.playAgain-container').classList.remove('hide')
                  }, 500);
            }
        }
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

    playAgain = () => {
        let icons = document.querySelectorAll('.result-icon')
        icons.forEach(icon => {
            icon.parentNode.removeChild(icon);
        });

        this.setState({
            answers: 0,
            right: 0,
        })
        document.querySelector('.playAgain-container').classList.add('hide')
        this.componentDidMount()
    }

    dontPlayAgain() {
        document.querySelector('.playAgain-container').classList.add('hide')
    }

    hideTitle() {
        document.querySelector('.container-h2').style.display = 'none'
    }


    render() {
        return (
            <div className="container-rugzak-game">
                <div className="container-rugzak">
                    <div className="navbar">
                        <Link className="back back-btn" to="/consultatie/spelletjes"><img src="/homepage/terug.svg" alt="terug" /></Link>
                    </div>

                    <div className="icons">
                        <img id="soundOn" onClick={this.editSoundLevel} className="speaker-icon" src="/games/memory/sound_on.svg" alt="sound on" />
                        <img id="soundOff" onClick={this.editSoundLevel} className="speaker-icon hide" src="/games/memory/sound_off.svg" alt="sound off" />
                    </div>

                    <div className="container-h2">
                        <h2>Wat neem je mee in je rugzak?</h2>
                    </div>

                    <div className="rugzak">
                        <img src="/games/rugzakspel/rugzak.svg" alt="rugzak" />
                    </div>
                    
                    {/* items */}
                    <div className="container-icon-rugzak">
                        <div data-framework="right" class="icon-rugzak clickable"><img src="/games/rugzakspel/badgrief.svg" alt="badgrief" /></div>
                        <div data-framework="right" class="icon-rugzak clickable"><img src="/games/rugzakspel/beer.svg" alt="beer" /></div>
                        <div data-framework="right" class="icon-rugzak clickable"><img src="/games/rugzakspel/boek.svg" alt="boek" /></div>
                        <div data-framework="wrong" class="icon-rugzak clickable"><img src="/games/rugzakspel/burger.svg" alt="burger" /></div>
                        <div data-framework="right" class="icon-rugzak clickable"><img src="/games/rugzakspel/games.svg" alt="games" /></div>
                        <div data-framework="wrong" class="icon-rugzak clickable"><img src="/games/rugzakspel/kat.svg" alt="kat" /></div>
                        <div data-framework="right" class="icon-rugzak clickable"><img src="/games/rugzakspel/kledij.svg" alt="kledij" /></div>
                        <div data-framework="wrong" class="icon-rugzak clickable"><img src="/games/rugzakspel/raket.svg" alt="raket" /></div>
                        <div data-framework="wrong" class="icon-rugzak clickable"><img src="/games/rugzakspel/bal.svg" alt="bal" /></div>
                    </div>

                    <div className="footer-rugzak"></div>

                    <div className="audio-rugzak"></div>
                    
                    <div className="playAgain-container playAgain-container-rugzak hide">
                    <div>
                        <h3>Nog eens spelen?</h3>
                        <button onClick={this.playAgain}>Ja</button>
                        <button onClick={this.dontPlayAgain}>Nee</button>
                        <p id="percentage"></p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default index

// ADD RIGHT ICONS BELLOW THE BAG 
// insertAdjacentHTML

// DRAGABLLE