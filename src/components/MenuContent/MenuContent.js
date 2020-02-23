import React from 'react';

//components
import BarCard from 'components/BarCard/BarCard'
import Filter from 'components/Filter/Filter';

export default function MenuContent(props) {
  const { activeContent, selectedBar, setisMenuOpen } = props

  const filters = [
    {
      name: 'Happyhour',
      title: 'Happy Hour',
      condition: 'Until',
      values: ['18h', '19h', '20h', '21h', '22h', '23h', '00h']
    },
    {
      name: 'Beer',
      title: 'Beer Price',
      condition: 'Less then',
      values: ['3€', '4€', '5€', '6€', '7€', '8€']

    },
    {
      name: 'Time',
      title: 'Openning Hours',
      condition: 'Until',
      values: ['22h', '23h', '00h', '01h', '02h', '03h', '04h', '05h']
    }
  ]

  return (
    <>
      {activeContent === 'bar' ? <BarCard bar={selectedBar} /> : null}

      {filters.map(filter => {
        if (filter.name === activeContent) {
          return <Filter name={filter.name} title={filter.title} condition={filter.condition} values={filter.values} key={filter.name} setIsMenuOpen={setisMenuOpen}/>
        }
      })}

    </>
  )
}