import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from 'assets/logo_text.svg';
import './HomePage.scss';

import Filter from 'components/Filter/Filter'

function App() {
  return (
    <Filter />
    // <div className="Home">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <div>
    //     <p>Cheers will help you find the best place to share the Olympic Games’ emotions !</p>
    //     <p>Go out and celebrate !</p>
    //   </div>
    //   <Link
    //     className="App-link"
    //     to="/map"
    //   >
    //     Start
    //     </Link>
    // </div>
  );
}

export default App;