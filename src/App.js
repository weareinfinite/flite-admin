import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import './App.css';

import Login from './components/pages/login'
import Dashboard from './components/pages/dashboard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact  path="/" component={ Login }></Route>
            <Route path="/dashboard"  component={ Dashboard } ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
