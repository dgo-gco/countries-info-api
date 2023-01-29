import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { Page } from './Page'

//in the page path, info after ':' is considered as parameter
export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/page/:id' element={<Page />} />
        </Routes>
    </BrowserRouter>
  )
}
