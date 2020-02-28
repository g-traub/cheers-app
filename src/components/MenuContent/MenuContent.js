import React from 'react';

//components
import BarCard from 'components/BarCard/BarCard'
import Filter from 'components/Filter/Filter';

export default function MenuContent(props) {
  const { activeContent, selectedBar, filters, setFilters, setActiveContent } = props

  const filtersContent = [
    {
      name: 'happyAfter',
      title: 'Happy Hour',
      condition: 'After',
      values: ['18', '19', '20', '21', '22', '23', '00'],
      unit: 'h'
    },
    {
      name: 'price',
      title: 'Beer Price',
      condition: 'Less then',
      values: ['3', '4', '5', '6', '7', '8'],
      unit: '€'

    },
    {
      name: 'openAfter',
      title: 'Open',
      condition: 'After',
      values: ['22', '23', '00', '01', '02', '03', '04', '05'],
      unit: 'h'
    }
  ]

  return (
    <>
      {activeContent === 'bar' ? <BarCard bar={selectedBar} /> : null}

      {filtersContent.map(filterContent => {
        if (filterContent.name === activeContent) {
          return <Filter filterContent={filterContent} key={filterContent.name} filters={filters} setFilters={setFilters} setActiveContent={setActiveContent}/>
        }
      })}

    </>
  )
}