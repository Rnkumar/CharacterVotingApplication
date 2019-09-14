import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import FOF from './components/FOF';
import Validator from './components/Validator';

function App() {
  return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route component={FOF}/>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
