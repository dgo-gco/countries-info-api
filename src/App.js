import './App.css';
import { Navbar } from './components/Navbar'
import { InputsSection } from './components/InputsSection'
import { Main } from './components/Main'
import Switch from "react-switch";
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null)

function App() {
  const [worldCountriesData, setWorldCountriesData] = useState([]);
  const [search, setSearch] = useState('')
  const [selection, setSelection] = useState('')

  const [theme, setTheme] = useState('dark')

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

    const toggleBtn = () => {
      setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }

  return (
    <ThemeContext.Provider value={{theme, toggleBtn}}>
        <div className="App" id={theme}>
          <div className="btn">
            <Switch className='switchR' onChange={toggleBtn} 
            checked={theme === 'light'} offColor={'#d2fff7'}
            onColor={'#09192F'} uncheckedIcon={false} 
            checkedIcon={false} offHandleColor={'#09192F'}/>
          </div>
          <Navbar />
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
        </div>
    </ThemeContext.Provider>

  );
}

export default App;
