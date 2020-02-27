import React from 'react';

//components
import MenuContent from 'components/MenuContent/MenuContent'
//style 
import './Menu.scss';
// icons
import {ReactComponent as Time} from 'assets/icons/Time.svg'
import {ReactComponent as Beer} from 'assets/icons/Beer.svg'
import {ReactComponent as Happy} from 'assets/icons/Happyhour.svg'
import {ReactComponent as Terrace} from 'assets/icons/Terrace.svg'

function Menu(props) {
  const { isMenuOpen, setisMenuOpen, selectedBar, activeContent, setActiveContent, filters, setFilters } = props
    
  const openFilter = (filterName) => () => {
    if (filterName === 'Terrace') {
      if (filters.terrace.active) {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: false } });
      } else {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: true } });
      }
    } else {
      setActiveContent(filterName)
      setisMenuOpen(true)
    }
  }

  const filterOpenOrActive = (filterName) => {
  }

  return (
    <section id="Menu" className={isMenuOpen ? 'isOpen' : ''}>
      <div className="menu">
        {isMenuOpen && <div className="menu__content">
          <MenuContent selectedBar={selectedBar} activeContent={activeContent} setisMenuOpen={setisMenuOpen} filters={filters} setFilters={setFilters} />
        </div>}
        <div className={isMenuOpen ? 'buttons buttons--bordered' : 'buttons'}>
          <div className="button--reset">Reset</div>
          <div className="filterButtons">
            <div onClick={openFilter('Time')} className={activeContent === 'Time' ? 'active filterButton' : 'filterButton'}>
              <Time height="30" width="30" />
            </div>
            <div onClick={openFilter('Happyhour')} className={activeContent === 'Happyhour' ? 'active filterButton' : 'filterButton'}>
              <Happy height="32" width="32" />
          </div>
            <div onClick={openFilter('Beer')} className={activeContent === 'Beer' ? 'active filterButton' : 'filterButton'}>
              <Beer height="32" width="32" />
          </div>
            <div onClick={openFilter('Terrace')} className={activeContent === 'Terrace' ? 'active filterButton' : 'filterButton'}>
              <Terrace height="32" width="32" />
          </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Menu;