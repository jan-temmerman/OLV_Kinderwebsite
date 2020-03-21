import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';
import Consultatie from './views/Consultatie/Consultatie';
import Cons_WatGebeuren from './views/Consultatie/Cons_WatGebeuren';

// GAMES
import GameMemoryView from './views/games/Memory';
import GameMemoryInfoView from './views/games/Info';
import VirusGame from './views/games/virus-game';
import BagView from './views/games/rugzak-game/index';


// 404
import ErrorNotFound from './views/Error404';


import Cons_Spelletjes from './views/Consultatie/Cons_Spelletjes';
import Opna_Spelletjes from './views/Opname/Opna_Spelletjes';
import Cons_WieIsWie from './views/Consultatie/Cons_WieIsWie';
import Opna_WieIsWie from './views/Opname/Opna_WieIsWie';
import Opname from './views/Opname/Opname';
import BodyGameV2 from './views/games/body-game';
import Opna_WatGebeuren from './views/Opname/Opna_WatGebeuren';
import Dagkliniek from './views/Dagkliniek/Dagkliniek';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" component={HomeView} exact />

        <Route path="/consultatie" component={Consultatie} exact />
          <Route path="/consultatie/wat_zal_er_gebeuren" component={Cons_WatGebeuren} exact />
          <Route path="/consultatie/spelletjes" component={Cons_Spelletjes} exact />
          <Route path="/consultatie/spelletjes/virusspel" component={VirusGame} exact />
          <Route path="/consultatie/spelletjes/lichaamspel" component={BodyGameV2} exact />
          <Route path="/consultatie/spelletjes/memory" component={GameMemoryView} exact />
          <Route path="/consultatie/spelletjes/rugzak" component={BagView} exact />
          <Route path="/consultatie/wie_is_wie" component={Cons_WieIsWie} exact />

        <Route path="/dagkliniek" component={Dagkliniek} exact />

        <Route path="/opname" component={Opname} exact />
        <Route path="/opname/wat_zal_er_gebeuren" component={Opna_WatGebeuren} exact />
        <Route path="/opname/spelletjes" component={Opna_Spelletjes} exact />
          <Route path="/opname/spelletjes/memory" component={GameMemoryView} exact />
        <Route path="/opname/spelletjes/virusspel" component={VirusGame} exact />
        <Route path="/opname/spelletjes/rugzak" component={BagView} exact/>
        <Route path="/opname/wie_is_wie" component={Opna_WieIsWie} exact />

        <Route path="/game-memory-info" component={GameMemoryInfoView} exact />

        <Route path="/opname" component={HomeView} exact />
        <Route path="/games/memory" component={GameMemoryView} exact />
        <Route path="/games/memory/info" component={GameMemoryInfoView} exact />
        <Route path="/games/rugzak" component={BagView} exact/>
        <Route path="/" component={HomeView} exact />
        <ErrorNotFound path="*"/>
      </Switch>
    </Router>
  );
}
