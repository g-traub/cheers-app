import React, { useState } from 'react'
//components
import Picker from 'components/Picker/Picker'
//style 
import './Filter.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'

function Filter() {
  const [value, setValue] = useState('6€');
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <div id="Filter">
      <div className="filter__heading">
        <div className="filter__icon">
          <Happyhour width="25px" />
        </div>
        {/* <div className="filter__icon">
          <Beer width="25px"/>
        </div>
        <div className="filter__icon">
          <Time width="25px"/>
        </div> */}
        <div className="filter__name">Happy Hour</div>
      </div>
      <Picker label="Less then" values={['3€', '4€', '5€', '6€', '7€', '8€']} value={value} handleChange={handleChange} />
      <div className="filter__button">Ok</div>
    </div>
  )
}
export default Filter;