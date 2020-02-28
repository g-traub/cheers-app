import React from 'react';

//components
import MenuContent from 'components/MenuContent/MenuContent'
//style 
import './Menu.scss';
// icons
import { ReactComponent as Time } from 'assets/icons/Time.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Happy } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Terrace } from 'assets/icons/Terrace.svg'

function Menu(props) {
  const { selectedBar, activeContent, setActiveContent, filters, setFilters } = props

  const toggleFilter = (filterName) => () => {
    if (filterName === 'terrace') {
      if (filters.terrace.active) {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: false } });
      } else {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: true } });
      }
    } else if (activeContent === filterName){
      setActiveContent(null)
    } else {
      setActiveContent(filterName)
    }
  }

  const isfilterOpenOrActive = (filterName) => {
    return activeContent === filterName || filters[filterName].active
  }

  const isAnyFilterActive = Object.values(filters).some(filter => filter.active)

  const resetFilters = () => {
    if (isAnyFilterActive) {
      setFilters({
        price: { value: null, active: false },
        terrace: { value: null, active: false },
        openAfter: { value: null, active: false },
        happyAfter: { value: null, active: false }
      })
      setActiveContent(null)
    }
  }

  return (
    <section id="Menu" className={activeContent ? 'isOpen' : ''}>
      <div className="menu">
        {activeContent && <div className="menu__content">
          <MenuContent selectedBar={selectedBar} activeContent={activeContent} setActiveContent={setActiveContent} filters={filters} setFilters={setFilters} />
        </div>}
        <div className={activeContent ? 'buttons buttons--bordered' : 'buttons'}>
          <div className={isAnyFilterActive ? 'buttonReset' : 'buttonReset--disabled buttonReset'} onClick={resetFilters}>Reset</div>
          <div className="filterButtons">
            <div onClick={toggleFilter('openAfter')} className={isfilterOpenOrActive('openAfter') ? 'active filterButton' : 'filterButton'}>
              <Time height="30" width="30" />
            </div>
            <div onClick={toggleFilter('happyAfter')} className={isfilterOpenOrActive('happyAfter') ? 'active filterButton' : 'filterButton'}>
              <Happy height="32" width="32" />
            </div>
            <div onClick={toggleFilter('price')} className={isfilterOpenOrActive('price') ? 'active filterButton' : 'filterButton'}>
              <Beer height="32" width="32" />
            </div>
            <div onClick={toggleFilter('terrace')} className={isfilterOpenOrActive('terrace') ? 'active filterButton' : 'filterButton'}>
              <Terrace height="32" width="32" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Menu;