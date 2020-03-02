import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'

import HomeView from './views/HomeView'
import Consultatie from './views/Consultatie'

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/consultatie" component={Consultatie} exact />
          <Route path="/dagkliniek" component={HomeView} exact />
          <Route path="/opname" component={HomeView} exact />
        </Switch>
    </Router>
  );
}
