import React from 'react';

export default function GameOver(props) {
  const { score } = props;
  return (
    <div className="game__overlay">
      <h1>Geen levens meer!</h1>
      <p>
        Je hebt een score van
        {' '}
        {score}
        {' '}
        punten gehaald!
      </p>
      <div className="btn__container">
        <a href="/games/virus" className="btn">Speel opnieuw</a>
        <a href="/" className="btn">Ga terug</a>
      </div>
    </div>
  );
}
