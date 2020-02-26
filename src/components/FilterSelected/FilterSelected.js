import React, { useState } from 'react'
//components
import Picker from 'components/Picker/Picker'
//style 
import './FilterSelected.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'
import { ReactComponent as Terrace } from 'assets/icons/Terrace.svg'

function FilterSelected() {
  return (
    <div id="FilterSelected">
        <div className="filter__selected-container">
          <div className="filter__selected-icon happy-icon">
            <Happyhour height="30" />
            <div>5 $</div>
          </div>
          <div className="filter__selected-icon">
            <Beer height="30" />
            <div>5 $</div>
          </div>
          <div className="filter__selected-icon">
            <Time height="30" />
            <div>14h</div>
          </div>
          <div className="filter__selected-icon">
            <Terrace height="30" />
            <div>✓</div>
          </div>
        </div>
    </div>
  )
}
export default FilterSelected;