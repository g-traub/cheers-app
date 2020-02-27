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
  const { isMenuOpen, setisMenuOpen, selectedBar, activeContent, setActiveContent, filters, setFilters } = props

  const toggleFilter = (filterName) => () => {
    if (filterName === 'terrace') {
      if (filters.terrace.active) {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: false } });
      } else {
        setFilters({ ...filters, terrace: { value: 'terrace=1', active: true } });
      }
    } else if (activeContent === filterName){
      setActiveContent(null)
      setisMenuOpen(false)
    } else {
      setActiveContent(filterName)
      setisMenuOpen(true)
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
        openHour: { value: null, active: false },
        happyHour: { value: null, active: false }
      })
    }
  }

  return (
    <section id="Menu" className={isMenuOpen ? 'isOpen' : ''}>
      <div className="menu">
        {isMenuOpen && <div className="menu__content">
          <MenuContent selectedBar={selectedBar} activeContent={activeContent} setisMenuOpen={setisMenuOpen} filters={filters} setFilters={setFilters} />
        </div>}
        <div className={isMenuOpen ? 'buttons buttons--bordered' : 'buttons'}>
          <div className={isAnyFilterActive ? 'buttonReset' : 'buttonReset--disabled buttonReset'} onClick={resetFilters}>Reset</div>
          <div className="filterButtons">
            <div onClick={toggleFilter('openHour')} className={isfilterOpenOrActive('openHour') ? 'active filterButton' : 'filterButton'}>
              <Time height="30" width="30" />
            </div>
            <div onClick={toggleFilter('happyHour')} className={isfilterOpenOrActive('happyHour') ? 'active filterButton' : 'filterButton'}>
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