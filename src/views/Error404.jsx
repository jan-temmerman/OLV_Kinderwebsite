import React, { Component } from 'react'
import '../sass/games/_fonts.scss';
import '../sass/404.scss'

export class Error404 extends Component {
    render() {
        return (
            <div>
                <div class="mars"></div>
                    
                    <div class="container-background-full-height"></div>
                
                    <div class="container-text-404">
                        <p class="title">Olivia is verdwaald</p>
                        <p class="subtitle">
                            De pagina die je zoekt bestaat niet :(
                        </p>
                        <div align="center">
                            <a class="btn-back" href="/">Ga terug naar de startpagina</a>
                        </div>
                    </div>
                    <img src="/Olivia_Astronaut.svg" class="astronaut" alt="olivia"/>
                <img src="/Raket_gecrashed.svg" class="spaceship" alt="raket"/>
            </div>
        )
    }
}

export default Error404
