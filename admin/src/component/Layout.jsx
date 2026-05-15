import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const location = useLocation()
  return (
    <div className='flex min-h-screen no-scrollbar bg-gray-50'>
      {location.pathname === "/" && (
        <div className='hidden md:block '>
          <Sidebar/>
        </div>
      )}
        <div className='flex-1 min-h-screen flex flex-col'>
            <Navbar/>

        <div className='flex-1  bg-amber-950 '>
            {children}  
        </div>

        </div>

    </div>
  )
}

export default Layout