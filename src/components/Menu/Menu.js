
import React, { useState } from 'react';

import './Menu.scss';

function Menu() {

  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <section id="Menu">
      <div className="menu">
        <div className="buttons">
          <div className="button">
            <div className="button__text">All</div>
            <img className="button__icon" src={require('assets/icons/All.svg')} alt="" />
          </div>
          <div className="button">
            <div className="button__text">Now</div>
            <img className="button__icon button__icon--time" src={require('assets/icons/Time.svg')} alt="" />
          </div>
          <div onClick={() => setisMenuOpen(!isMenuOpen)} className="filter__button">{isMenuOpen ? 'Ok' : 'More filters'}</div>
        </div>
      </div>
    </section>
  );
}

export default Menu;