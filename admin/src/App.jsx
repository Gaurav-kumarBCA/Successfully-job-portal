import React from 'react'
import Deshboard from './pages/Deshboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Users from './pages/Users'
import Jobs from './pages/Jobs'
import Recruiters from './pages/Recruiters'
import Companies from './pages/Companies'
import Notification from './pages/Notification'
import CreateRecruiters from './pages/CreateRecruiters'
import AllpandingRecruiter from './pages/AllpandingRecruiter'
import UserProfile from './pages/UserProfile'

const App = () => {
  
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Deshboard/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/> 
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/recruiters' element={<Recruiters/>}/>
      <Route path='/companies' element={<Companies/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/create-recruiter' element={<CreateRecruiters/>}/>
      <Route path='/pending-recruiters' element={<AllpandingRecruiter/>}/>
      <Route path='/profile'element={<UserProfile/>}/>
    </Routes>
    </BrowserRouter>
   )
}

export default App

