import React, { useState } from 'react'
//components
import Picker from 'components/Picker/Picker'
//style 
import './Filter.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'

const icons = { Happyhour, Beer, Time }

function Filter(props) {
  // props
  const { name, title, condition, values, setIsMenuOpen } = props

  // @TODO : local value get last sent value else get this one 
  const [value, setValue] = useState(values[Math.round(values.length / 2)]);
  const handleChange = newValue => {
    setValue(newValue)
  }

  const filterBars = () => {
    setIsMenuOpen(false)
    console.log(value)
  }

  const Icon = icons[name];

  return (
    <div id="Filter">
      <div className="filter__heading">
        <div className="filter__icon">
          <Icon height="30" />
        </div>
        <div className="filter__name">{title}</div>
      </div>
      <Picker label={condition} values={values} value={value} handleChange={handleChange} />
      <div onClick={filterBars} className="filter__button">Ok</div>
    </div>
  )
}
export default Filter;