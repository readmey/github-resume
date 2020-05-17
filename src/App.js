import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div id="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user/:username/resume" component={Resume} />
        <Route path="/404-not-found" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
