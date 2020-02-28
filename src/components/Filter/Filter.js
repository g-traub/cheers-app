import React from 'react'
//components
import Picker from 'components/Picker/Picker'
//style 
import './Filter.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'
import { ReactComponent as Undo } from 'assets/icons/undo.svg'

const icons = { happyAfter: Happyhour, price: Beer, openAfter: Time }

function Filter(props) {
  // props
  const { filters, setFilters, setActiveContent } = props
  const { name, title, condition, values, unit } = props.filterContent

  const getInitialValue = () => {
    return filters[name].value || values[Math.round(values.length / 2)];
  }

  let value = getInitialValue()

  const filterBars = () => {
    setActiveContent(null)

    switch (name) {
      case 'happyAfter':
        setFilters({ ...filters, happyAfter: { value, formattedValue: `${value}:00:00`, active: true } })
        break;
      case 'price':
        setFilters({ ...filters, price: { value, active: true } })
        break;
      case 'openAfter':
        setFilters({ ...filters, openAfter: { value, formattedValue: `${value}:00:00`, active: true } })
        break;
      default: return;
    }

  }
  
  const resetFilter = () => {
    console.log('reset')
    setFilters({ ...filters, [name]: { value: null, active: false } })
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
      <Picker label={condition} values={values} value={value} unit={unit} filterValue={filters[name].value} handleChange={(newValue) => value = newValue} />
      <div className="filter__footer">
        {filters[name].active && <Undo width="25" className="undo" onClick={resetFilter} />}
        <div onClick={filterBars} className="filter__button">Ok</div>
      </div>
    </div>
  )
}
export default Filter;