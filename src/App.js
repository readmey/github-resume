import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Resume from './pages/Resume'
import NotFoundPage from './pages/NotFoundPage'

import "./App.css";
require('dotenv').config()

const App = () => (
  <Router>
    <div id="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user/:username/resume" component={Resume} />
        <Route component={NotFoundPage} />
      </Switch>  
    </div>
  </Router>
);


export default App;
