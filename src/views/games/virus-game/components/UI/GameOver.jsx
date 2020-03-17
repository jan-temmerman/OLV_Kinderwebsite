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
        <button type="button" onClick={() => { window.location.reload(); }} className="btn">Speel opnieuw</button>
        <a href="/" className="btn">Ga terug</a>
      </div>
    </div>
  );
}
