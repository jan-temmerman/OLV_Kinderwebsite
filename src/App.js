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
import Cons_Spelletjes from './views/Cons_Spelletjes';
import Opna_Spelletjes from './views/Opna_Spelletjes';
import WieIsWie from './views/WieIsWie';
import Opname from './views/Opname';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/consultatie/spelletjes/virusspel" component={VirusGame} exact />
        <Route path="/consultatie" component={Consultatie} exact />
          <Route path="/consultatie/wat_zal_er_gebeuren" component={WatGebeuren} exact />
          <Route path="/consultatie/spelletjes" component={Cons_Spelletjes} exact />
          <Route path="/consultatie/wie_is_wie" component={WieIsWie} exact />
        <Route path="/dagkliniek" component={HomeView} exact />
        <Route path="/opname" component={Opname} exact />
        <Route path="/opname/spelletjes" component={Opna_Spelletjes} exact />
        <Route path="/consultatie/spelletjes/memory" component={GameMemoryView} exact />
        <Route path="/game-memory-info" component={GameMemoryInfoView} exact />
        <Route path="/" component={HomeView} exact />
      </Switch>
    </Router>
  );
}
