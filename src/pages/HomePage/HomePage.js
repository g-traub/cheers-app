import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from 'assets/logo_text.svg';
import './HomePage.scss';

import Picker from 'components/Picker/Picker'

function App() {
  const [value, setValue] = useState('6€');
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <Picker label="Less then" values={['1€', '2€', '3€', '4€', '5€', '6€', '7€', '8€', '9€', '10€']} value={value} handleChange={handleChange} />
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