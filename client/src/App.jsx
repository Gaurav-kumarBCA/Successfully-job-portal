import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import AppliedRecruiters from './Pages/AppliedRecruiters'
import CheckRecruitersStatus from './Pages/CheckRecruitersStatus'
import RecruitersLogin from './Pages/RecruitersLogin'
import AddCompanies from './Pages/AddCompanies'
import CreateJobs from './Pages/CreateJobs'
import AppliedJob from './Pages/AppliedJob'
import RecruitersHome from './Pages/RecruitersHome'
import CompanyProfile from './Pages/CompanyProfile'
import GetAllJobs from './Pages/GetAllJobs'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/applied-recruiters' element={<AppliedRecruiters/>}/>
      <Route path='/Check-status-recruiters' element={<CheckRecruitersStatus/>}/>
      <Route path='/login-recruiters' element={<RecruitersLogin/>}/>
      <Route path='/add-companies' element={<AddCompanies/>}/>
      <Route path='/add-jobs' element={<CreateJobs/>}/>
      <Route path='/job-applied' element={<AppliedJob/>}/>
      <Route path='/dashboard-recruiters' element={<RecruitersHome/>}/>
      <Route path='/company-profile' element={<CompanyProfile/>}/>
      <Route path='/create-all-job' element={<GetAllJobs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App