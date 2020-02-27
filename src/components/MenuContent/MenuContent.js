import React from 'react';

//components
import BarCard from 'components/BarCard/BarCard'
import Filter from 'components/Filter/Filter';

export default function MenuContent(props) {
  const { activeContent, selectedBar, filters, setFilters, setActiveContent } = props

  const filtersContent = [
    {
      name: 'happyHour',
      title: 'Happy Hour',
      condition: 'Until',
      values: ['18h', '19h', '20h', '21h', '22h', '23h', '00h']
    },
    {
      name: 'price',
      title: 'Beer Price',
      condition: 'Less then',
      values: ['3€', '4€', '5€', '6€', '7€', '8€']

    },
    {
      name: 'openHour',
      title: 'Openning Hours',
      condition: 'Until',
      values: ['22h', '23h', '00h', '01h', '02h', '03h', '04h', '05h']
    }
  ]

  return (
    <>
      {activeContent === 'bar' ? <BarCard bar={selectedBar} /> : null}

      {filtersContent.map(filterContent => {
        if (filterContent.name === activeContent) {
          return <Filter name={filterContent.name} title={filterContent.title} condition={filterContent.condition} values={filterContent.values} key={filterContent.name} filters={filters} setFilters={setFilters} setActiveContent={setActiveContent}/>
        }
      })}

    </>
  )
}