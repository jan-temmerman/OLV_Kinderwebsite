import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';
import Consultatie from './views/Consultatie';
import WatGebeuren from './views/WatGebeuren';

// GAMES
import GameMemoryView from './views/games/Memory';
import GameMemoryInfoView from './views/games/Info';
import VirusGame from './views/games/virus-game';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/games/virus" component={VirusGame} exact />
        <Route path="/consultatie" component={Consultatie} exact />
        <Route path="/consultatie/WatZalErGebeuren" component={WatGebeuren} exact />
        <Route path="/dagkliniek" component={HomeView} exact />
        <Route path="/opname" component={HomeView} exact />
        <Route path="/game-memory" component={GameMemoryView} exact />
        <Route path="/game-memory-info" component={GameMemoryInfoView} exact />
        <Route path="/" component={HomeView} exact />
      </Switch>
    </Router>
  );
}
