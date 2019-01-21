import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Resume from './pages/Resume'
import "./App.css";
require('dotenv').config()

const App = () => (
  <Router>
    <div id="app">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/user/:username/resume" component={Resume} />
    </div>
  </Router>
);


export default App;
