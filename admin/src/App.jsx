import React from 'react'
import Deshboard from './pages/Deshboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Deshboard/>}/> 
      <Route path='/login' element={<Login/>}/> 
    </Routes>
    </BrowserRouter>
   )
}

export default App