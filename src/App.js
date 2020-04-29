import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';
import TopNav from './components/navigation/TopNav';
import MobileNav from './components/navigation/MobileNav';
import WelcomePage from './pages/welcome';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Responsive minWidth={760}>
        <TopNav />
      </Responsive>
      <div className="full-app-wrap">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
      <Responsive maxWidth={760}>
        <MobileNav />
      </Responsive>
    </div>
  );
}

export default App;
