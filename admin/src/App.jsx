import React from 'react'
import Deshboard from './pages/Deshboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'

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
    </Routes>
    </BrowserRouter>
   )
}

export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>Hello bhai</h1>
//     </div>
//   )
// }

// export default App