import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
        <div className='hidden md:block'><Sidebar/></div>
        <div className='flex-1 flex flex-col'>
            <Navbar/>

        <div className='flex-1 h-screen  bg-amber-950 '>
            {children}  
        </div>

        </div>

    </div>
  )
}

export default Layout