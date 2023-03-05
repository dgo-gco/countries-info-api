import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Switch from "react-switch";
import Home from './components/Home'
import Page from './components/Page'


export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')
  
    const toggleBtn = () => {
      setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }

  return (
    <ThemeContext.Provider value={{theme, toggleBtn}}>
      <div className="App" id={theme}>
    <BrowserRouter>
        <div className="btn">
            <Switch className='switchR' onChange={toggleBtn} 
            checked={theme === 'light'} offColor={'#d2fff7'}
            onColor={'#09192F'} uncheckedIcon={false} 
            checkedIcon={false} offHandleColor={'#09192F'}/>
          </div>
          <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page/:id' element={<Page />} />
        </Routes>
    </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App