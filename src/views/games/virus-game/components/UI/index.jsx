import React from 'react';
import Intro from './Intro';
import PlayPause from './PlayPause';
import Lives from './Lives';
import Score from './Score';
import GameOver from './GameOver';

export default function UI(props) {
  const {
    setGameState, game, game: {
      lives, score, gameOver, hasStarted,
    },
  } = props;
  let uiView;

  if (gameOver) {
    uiView = <GameOver score={score} />;
  } else if (hasStarted) {
    uiView = (
      <div className="game__ui">
        <PlayPause />
        <div className="top-right">
          <Lives lives={lives} />
          <Score score={score} />
        </div>
      </div>
    );
  } else {
    uiView = <Intro setGameState={setGameState} game={game} />;
  }

  return (
    <>
      {uiView}
    </>
  );
}
