import './App.css';
import { Navbar } from './components/Navbar'
import { InputsSection } from './components/InputsSection'
import { Main } from './components/Main'
// import { countries } from './data/countries-data'
import { useEffect, useState } from 'react';

function App() {
  const [worldCountriesData, setWorldCountriesData] = useState([]);
  const [search, setSearch] = useState('')
  console.log(worldCountriesData)
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


  return (
       <div className="App">
          <Navbar />
          <InputsSection
          handleSearch={handleSearch}
          value={search}
          />
          <div className="main-section-main">
            <Main 
            //countryData is my prop, I'll send it to Main({countryData})
            countryData={worldCountriesData}
            />
          </div>
        </div>
  );
}

export default App;
