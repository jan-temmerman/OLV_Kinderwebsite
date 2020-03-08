import React from 'react';

export default function Intro(props) {
  const { game: { startGame, difficulty } } = props;

  const difficultyBtns = [];

  for (let i = 0; i < Object.keys(difficulty).length; i += 1) {
    difficultyBtns.push(<button type="button" className="btn" onClick={() => { startGame(Object.keys(difficulty)[i]); }}>{difficulty[Object.keys(difficulty)[i]].buttonText}</button>);
  }

  return (
    <div className="game__overlay">
      <h1>Het virusspel</h1>
      <p>Kan jij alle virussen ontwijken?</p>
      <p>Tip: Sleep het karakter over het scherm met de muis om te spelen</p>
      <div className="btn__container">
        {difficultyBtns}
      </div>
    </div>
  );
}
