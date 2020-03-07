import React from 'react';

export default function Intro(props) {
  const { game: { startGame } } = props;
  return (
    <div className="game__overlay">
      <h1>Het virusspel</h1>
      <p>Kan jij alle virussen ontwijken?</p>
      <p>Tip: Sleep het karakter over het scherm met de muis om te spelen</p>
      {/* <button type="button" className="btn" onClick={startGame}>Start het spel</button> */}
      <div className="btn__container">
        <button type="button" className="btn" onClick={() => { startGame('easy'); }}>Makkelijk</button>
        <button type="button" className="btn" onClick={() => { startGame('normal'); }}>Normaal</button>
        <button type="button" className="btn" onClick={() => { startGame('hard'); }}>Moeilijk</button>
      </div>
    </div>
  );
}
