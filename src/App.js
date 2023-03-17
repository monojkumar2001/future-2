import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
// import particlesConfig from './components/config/particles';
// import Particles from "react-particles";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particle from "./components/Particle";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App" >
    
      <Router>
        <Header />
        <Particle/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
