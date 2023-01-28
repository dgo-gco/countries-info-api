import React from 'react'
import './Main.css'
import { Card } from './Card'

//------------------>I'm receiving my prop from the parent App.tsx, same name(countryData)
export const Main = ({ countryData }) => { 

  return (
    <div className='main-sec'>
        {countryData.map((pais) => 
        <Card 
        key={pais.id}
        countryData={pais}
        />
        )}
    </div>
  )
}
