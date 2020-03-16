import React from 'react';

import './sass/index.scss';
import GameView from './view/GameView';

export default function BodyGameV2() {
  return (
    <div className="body__container">
      <GameView />
    </div>
  );
}
