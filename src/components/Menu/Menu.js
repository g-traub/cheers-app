import React from 'react';

//components
import BarCard from 'components/BarCard/BarCard'
//style 
import './Menu.scss';
import { useEffect } from 'react';

function Menu(props) {
  const { isMenuOpen, setisMenuOpen, selectedBar, resetViewport } = props

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
    resetViewport()
  }
  
  return (
    <section id="Menu" className={isMenuOpen ? 'isOpen' : ''}>
      <div className="menu">
        {isMenuOpen && <div className="menu__content">
          <BarCard bar={selectedBar} />
        </div>}
        <div className={isMenuOpen ? 'buttons buttons--bordered' : 'buttons'}>
          <div className="button">
            <div className="button__text">All</div>
            <img className="button__icon" src={require('assets/icons/All.svg')} alt="" />
          </div>
          <div className="button">
            <div className="button__text">Now</div>
            <img className="button__icon button__icon--time" src={require('assets/icons/Time.svg')} alt="" />
          </div>
          <div onClick={toggleMenu} className="filter__button">{isMenuOpen ? 'Ok' : 'More filters'}</div>
        </div>
      </div>
    </section >
  );
}

export default Menu;