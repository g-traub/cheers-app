import React from 'react'
//style 
import './FilterSelected.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'
import { ReactComponent as Terrace } from 'assets/icons/Terrace.svg'
import { ReactComponent as Check } from 'assets/icons/check.svg'

function FilterSelected(props) {
  const { happyAfter, openAfter, price, terrace } = props.filters

  return (
    <div id="FilterSelected">
      <div className="filter__selected-container">
        {openAfter.active && <div className="filter__selected-icon">
          <Time height="20" />
          <div>{openAfter.value}h</div>
        </div>}
        {happyAfter.active && <div className="filter__selected-icon happy-icon">
          <Happyhour height="20" />
          <div>{happyAfter.value}h</div>
        </div>}
        {price.active && <div className="filter__selected-icon">
          <Beer height="20" />
          <div>{price.value}&euro;</div>
        </div>}
        {terrace.active && <div className="filter__selected-icon">
          <Terrace height="20" />
          <Check height="12" className="check" />
        </div>}
      </div>
    </div>
  )
}
export default FilterSelected;