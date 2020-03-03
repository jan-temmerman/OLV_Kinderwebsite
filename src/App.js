import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'

import HomeView from './views/HomeView'

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <HomeView />
          </Route>
          <Route path="/consultatie">
            <HomeView />
          </Route>
          <Route path="/dagkliniek">
            <HomeView />
          </Route>
          <Route path="/opname">
            <HomeView />
          </Route>
        </Switch>
    </Router>
  );

  return (
    <div className="App">
      <HomeView/>
    </div>
  );
}

export default App
