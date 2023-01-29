import React from 'react'
import './Main.css'
import { Card } from './Card'
import { Link } from 'react-router-dom'

//------------------>I'm receiving my prop from the parent App.tsx, same name(countryData)
export const Main = ({ countryData }) => { 

  return (
    <div className='main-sec'>
        {countryData.map((pais) => 
          <Link to={{ pathname: `/page/${pais.cca3}`,
          state: { page: pais.name.common }
          }}>
            <Card 
            key={pais.id}
            countryData={pais}
            />
          </Link>
        )}
    </div>
  )
}
