import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='link'>
        <h1>THE WORLD BOOK</h1>
      </Link>
    </div>
  )
}


export default Navbar