import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false)

  const lightMode = () => {
    setDarkMode( darkMode ? false : true)
  }
  console.log(darkMode)
  return (
    <div className='navbar'>
        <h1>THE WORLD BOOK</h1>
    </div>
  )
}
