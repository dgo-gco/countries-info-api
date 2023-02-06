import React, { useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import './Page.css'
import { useParams } from 'react-router-dom'

export const Page = () => {
    const { id } = useParams()
    const url = `https://restcountries.com/v3.1/alpha/${id}`
    // console.log(id)
    const [countryInfo, setCountryInfo] = useState([])
    const [countryCurrency, setCountryCurrency] = useState([])
    console.log(countryInfo)
    console.log(countryCurrency)

   useEffect(() => {
     fetch(url)
    .then(res => res.json())
    .then(data => setCountryInfo(data))
    }, [])

    useEffect(() => {
     fetch(url)
    .then(res => res.json())
    .then(datas => setCountryCurrency(datas[0].currencies))
    }, [])

    let currencies = ''
    for (let key in countryCurrency){
        currencies += Object.values(countryCurrency[key]).join(', ')
    }
    
  return (
    <div>
        <Navbar />
        <section className="page-container">
                {
                    countryInfo.map((country) => (
                <div className="country-info-section" key={country.area}>
                <div className='coat-of-arms' style={
                    {backgroundImage: `url(${country.coatOfArms.png})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', 
                    }}></div>
                <div className="image-flag">
                    <img src={country.flags.png} alt="" />
                </div>        
                <div className="country-text">
                    <h1>{country.name.common}</h1>
                    <div className="details-country"> 
                        <p><b>Official name:</b> {country.name.official}</p> 
                        <p><b>Region:</b> {country.region}</p>
                        <p><b>Subregion:</b> {country.subregion}</p>
                        <br />
                        <p><b>Currency:</b> {currencies}</p>
                        <p><b>Languages:</b> {Object.values(country.languages).join(', ')}</p>                       
                    </div>
                </div>
            </div>
                    ))   
                }
                
        </section>
    </div>
  )
}
