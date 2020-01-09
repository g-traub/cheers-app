import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from 'pages/HomePage/HomePage';
import Map from 'pages/Map/Map';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        {/* Should be last because most general route */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <footer></footer>
    </div>
  );
}

export default App;
