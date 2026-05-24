import React from 'react'
import Navbar from './Navbar'

const Layout=({children})=>{

return(

<div className="min-h-screen overflow-x-hidden">

<Navbar/>

<div className="overflow-x-hidden">

{children}

</div>

</div>

)

}

export default Layout