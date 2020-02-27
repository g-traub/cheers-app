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
  const { happyHour, openHour, price, terrace } = props.filters
  
  const extractFilterValue = value => {
    return value.match(/[0-9]{1,2}/)
  }

  return (
    <div id="FilterSelected">
      <div className="filter__selected-container">
        {openHour.active && <div className="filter__selected-icon">
          <Time height="20" />
          <div>{extractFilterValue(openHour.value)}h</div>
        </div>}
        {happyHour.active && <div className="filter__selected-icon happy-icon">
          <Happyhour height="20" />
          <div>{extractFilterValue(happyHour.value)}h</div>
        </div>}
        {price.active && <div className="filter__selected-icon">
          <Beer height="20" />
          <div>{extractFilterValue(price.value)}&euro;</div>
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