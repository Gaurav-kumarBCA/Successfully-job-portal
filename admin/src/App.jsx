import React from 'react'
import Deshboard from './pages/Deshboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Users from './pages/Users'
import Jobs from './pages/Jobs'

const App = () => {
  const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Deshboard/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/> 
      <Route path='/jobs' element={<Jobs/>}/>
    </Routes>
    </BrowserRouter>
   )
}

export default App

