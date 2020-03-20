import React from 'react';
import BackButton from './BackButton';

export default function Intro(props) {
  const { game: { startGame, game: { difficulty } } } = props;

  const difficultyBtns = [];

  for (let i = 0; i < Object.keys(difficulty).length; i += 1) {
    difficultyBtns.push(<button type="button" key={Object.keys(difficulty)[i]} className="btn" onClick={() => { startGame(Object.keys(difficulty)[i]); }}>{difficulty[Object.keys(difficulty)[i]].buttonText}</button>);
  }

  return (
    <div className="game__overlay">
      <BackButton style={{ position: 'absolute', top: '5%', left: '5%' }} />
      <h1 className="virus__title">Het virusspel</h1>
      <p>Kan jij alle virussen ontwijken?</p>
      <p>Tip: Sleep het karakter over het scherm met de muis om te spelen</p>
      <div className="btn__container">
        {difficultyBtns || ''}
      </div>
      <div className="instruction__container">
        <div>
          <span>1.</span>
          <img src="/games/virus/viruspel_svg1.svg" alt="Stap 1" />
        </div>
        <div>
          <span>2.</span>
          <img src="/games/virus/viruspel_svg2.svg" alt="Stap 2" />
        </div>
        <div>
          <span>3.</span>
          <img src="/games/virus/viruspel_svg3.svg" alt="Stap 3" />
        </div>
      </div>
    </div>
  );
}
