import React from 'react';

export default function Intro(props) {
  const { game: { startGame } } = props;
  return (
    <div className="game__overlay">
      <h1>Het virusspel</h1>
      <p>Kan jij alle virussen ontwijken?</p>
      <button type="button" className="btn" onClick={startGame}>Start het spel</button>
    </div>
  );
}
