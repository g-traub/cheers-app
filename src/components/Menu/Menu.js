import React from 'react';

//components
import MenuContent from 'components/MenuContent/MenuContent'
//style 
import './Menu.scss';
import { useState } from 'react';
// icons
import {ReactComponent as Time} from 'assets/icons/Time.svg'
import {ReactComponent as Beer} from 'assets/icons/Beer.svg'
import {ReactComponent as Happy} from 'assets/icons/Happyhour.svg'
import {ReactComponent as Terrace} from 'assets/icons/Terrace.svg'

function Menu(props) {
  const { isMenuOpen, setisMenuOpen, selectedBar} = props
  
  const [activeContent, setActiveContent] = useState(null)
  
  const openFilter = (filterName) => () => {
    if(filterName === 'Terrace') {
      // @TODO: directly filter terrace
    } else {
      setActiveContent(filterName)
      setisMenuOpen(true)
    }
  }

  return (
    <section id="Menu" className={isMenuOpen ? 'isOpen' : ''}>
      <div className="menu">
        {isMenuOpen && <div className="menu__content">
          <MenuContent selectedBar={selectedBar} activeContent={activeContent} setisMenuOpen={setisMenuOpen}/>
        </div>}
        <div className={isMenuOpen ? 'buttons buttons--bordered' : 'buttons'}>
          <div onClick={openFilter('Time')} className="button">
            <div className="button__text">Time</div>
            <Time height="30"/>
          </div>
          <div onClick={openFilter('Happyhour')} className="button">
            <div className="button__text">Happy</div>
            <Happy height="30"/>
          </div>
          <div onClick={openFilter('Beer')} className="button">
            <div className="button__text">Price</div>
            <Beer height="30"/>
          </div>
          <div onClick={openFilter('Terrace')} className="button">
            <div className="button__text">Terrace</div>
            <Terrace height="30"/>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Menu;