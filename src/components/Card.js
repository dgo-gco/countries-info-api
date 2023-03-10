import React from 'react'
import './Main.css'
import './Card.css'

export const Card = ({ countryData }) => {

  let populationData = countryData.population
  let populationNum = Number(populationData).toLocaleString()
  
  return (
      <div className='main-section'>
          <div className="country-card">
            <div className="country-image">
              <img src={countryData.flags.png} alt="" className='flag'/>
            </div>
            <div className="country-txt">
              <p className='country-name'><b>{countryData.name.common}</b></p>
              <br />
              <p><b>Population:</b> {populationNum}</p>
              <p><b>Continent:</b> {countryData.continents}</p>
              <p><b>Capital:</b> {countryData.capital}</p>
              <p></p>
            </div>
          </div>
      </div>
  )
}
