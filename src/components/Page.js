import React, { useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import './Page.css'
import { useParams } from 'react-router-dom'

export const Page = () => {
    const { id } = useParams()
    const url = `https://restcountries.com/v3.1/alpha/${id}`
    // console.log(id)
    const [countryInfo, setCountryInfo] = useState([])
    const [countryLanguage, setCountryLanguage] = useState([])
    const [countryCurrency, setCountryCurrency] = useState([])
    console.log(countryLanguage)
    console.log(countryCurrency)

   useEffect(() => {
     fetch(url)
    .then(res => res.json())
    .then(data => setCountryInfo(data))
    }, [])

    useEffect(() => {
     fetch(url)
    .then(res => res.json())
    .then(datas => setCountryLanguage(datas[0].languages))
    }, [])

    useEffect(() => {
     fetch(url)
    .then(res => res.json())
    .then(datas => setCountryCurrency(datas[0].currencies))
    }, [])


    let langues = ''
    for (let key in countryLanguage){
        langues += countryLanguage[key] + ', '
    }

    let currencies = ''
    for (let key in countryCurrency){
        currencies += Object.values(countryCurrency[key]) + ', '
    }
    console.log(currencies)
    
  return (
    <div>
        <Navbar />
        <section className="page-container">
                {
                    countryInfo.map((country) => (
                <div className="country-info-section">
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
                        <p><b>Languages:</b> {langues}</p>
                    </div>
                </div>
            </div>
                    ))   
                }
                
        </section>
    </div>
  )
}
