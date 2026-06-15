import { ToastContainer } from "react-toastify"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecruiterProvider from "./store/recruiter.store.jsx"
import AuthProvider from "./store/auth.store.jsx"

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RecruiterProvider>  
    <App />
    <ToastContainer
  position="top-center"
  autoClose={2500}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  limit={3}
  pauseOnHover
  toastClassName="rounded-xl text-sm"
  bodyClassName="font-medium"
  style={{
    marginTop: "10px",
    width: "90%",
    maxWidth: "400px"
  }}
/> 

</RecruiterProvider>
</AuthProvider>
)
