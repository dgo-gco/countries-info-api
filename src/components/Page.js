import React, { useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import './Page.css'
import { useParams } from 'react-router-dom'

export const Page = () => {

    const { id } = useParams()
    console.log(id)
    const [countryInfo, setCountryInfo] = useState([])
    console.log(countryInfo)
   useEffect(() => {
     fetch(`https://restcountries.com/v3.1/alpha/${id}`)
    .then(res => res.json())
    .then(data => setCountryInfo(data))
    }, [])


  return (
    <div>
        <Navbar />
        <section className="page-container">
            <div className="country-info-section">
                <div className="image-flag">
                    <img src='https://source.unsplash.com/random' alt="" />
                </div>
                <div className="country-text">
                    <h1>HOLA</h1>
                    <div className="details-country">
                        <p>Population: </p>
                        <p>Native name:</p>
                        <p>Currency:</p>
                        <br />
                        <p>Capital: </p>
                        <p>Native name:</p>
                        <p>Currency:</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
