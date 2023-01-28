import React from 'react'
import './InputsSection.css'


export const InputsSection = ({ handleSearch, value }) => {


  return (
    <div className='input-section'>
        <form action="" className='input-form'>
            <input 
            type="text" 
            name="search-countryName" 
            id="search-name" 
            placeholder='Search for your country...' 
            onChange={handleSearch}
            value={value}
            />
            <div className="list-inp">
                    <select id='continent'>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
            </div>
        </form>
    </div>
  )
}
