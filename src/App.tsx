import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';
import Frame from './components/frame';

const Home = () => {
  return (
    <div>
      <Frame />
      <h1 id="main-title">Control panel</h1>
      <div className="control-panel">
        <button className="ctrl-btns" type="button">
          Lights
        </button>
        <button className="ctrl-btns" type="button">
          Doors
        </button>
        <button className="ctrl-btns" type="button">
          Windows
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
