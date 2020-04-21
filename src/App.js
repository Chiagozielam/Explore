import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
