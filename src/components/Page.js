import React, { useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import './Page.css'
import { useParams } from 'react-router-dom'

export const Page = () => {
    const { id } = useParams()
    // console.log(id)
    const [countryInfo, setCountryInfo] = useState([])
    // const [countryLanguage, setCountryLanguage] = useState([])
    console.log(countryInfo)

   useEffect(() => {
     fetch(`https://restcountries.com/v3.1/alpha/${id}`)
    .then(res => res.json())
    .then(data => setCountryInfo(data))
    }, [])

    // const langs = countryInfo[0].currencies
    // console.log(langs)
    // let langues = ''

    // for (let key in langs){
    //     langues += langs[key] + ', '
    // }

    // console.log(langues)
    
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
                        <p><b>Currency:</b> {country.region}</p>
                        <p><b>Languages:</b> {}</p>
                        <p><b>Top Level Domain:</b> {country.region}</p>
                    </div>
                </div>
            </div>
                    ))   
                }
        </section>
    </div>
  )
}
