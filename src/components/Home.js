import '../App.css';
import { InputsSection } from './InputsSection'
import { Main } from './Main'
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null)

function Home() {
  const [worldCountriesData, setWorldCountriesData] = useState([]);
  const [search, setSearch] = useState('')
  const [selection, setSelection] = useState('')

  useEffect(() => {
     fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setWorldCountriesData(data))
    }, [])

    //Getting user's inputs and passing them to my State Variable & my function to filter
    const handleSearch = e => {
      setSearch(e.target.value);
      filterSearch(e.target.value)
    }

    //I filter the API by name.common, and pass as an argument what the user types
    const filterSearch = (userSearch) => {
      let userCountrySearch = worldCountriesData.filter((element) => {
        //Why so long? getting all the matching elements from the user's input
        if(element.name.common.toString().toLowerCase().includes(userSearch.toLowerCase())){
          return element
        }
      })
      setWorldCountriesData(userCountrySearch)
      //After this f, my State Variable will change to match only the users request
    }

    const userSelect = e => {
      setSelection(e.target.value);
      regionSelection(e.target.value)
    }

    const regionSelection = (userRegion) => {
      let userSelection = worldCountriesData.filter((item) => {
        if(item.region.includes(userRegion)){
          return item
        }
      })
      setWorldCountriesData(userSelection)
    }


  return (
        <>
          <InputsSection
          handleSearch={handleSearch}
          value={search}
          countryData={worldCountriesData}
          userSelect={userSelect}
          />
          <div className="main-section-main">
            <Main 
            //countryData is my prop, I'll send it to Main({countryData})
            countryData={worldCountriesData}
            />
          </div>
        </>
  );
}

export default Home