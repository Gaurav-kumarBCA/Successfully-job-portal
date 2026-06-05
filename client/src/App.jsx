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
import RecruiterProfile from './Pages/RecruiterProfile'
import GetAllApplicants from './Pages/GetAllApplicants'
import CompanyUpdate from './component/CompanyUpdate'
import CompanyDeleted from './component/CompanyDeleted'
import JobUpdated from './component/JobUpdated'
import JobDeleted from './component/JobDeleted'
import GetAllJobbyUsers from './Pages/GetAllJobbyUsers'
import GetAllCompaniesbyUsers from './Pages/GetAllCompaniesbyUsers'

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
      <Route path='/recruiter/profile' element={<RecruiterProfile/>}/>
      <Route path='/applicants' element={<GetAllApplicants/>}/>
      <Route path='/company_Update/:id' element={<CompanyUpdate/>}/>
      <Route path='/company_Deleted/:id' element={<CompanyDeleted/>}/>
      <Route path='/job_Update/:id' element={<JobUpdated/>}/>
      <Route path='/job_delete/:id' element={<JobDeleted/>}/>
      <Route path='/all_jobs/applied' element={<GetAllJobbyUsers/>} />
      <Route path='/all_companies' element={<GetAllCompaniesbyUsers/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App