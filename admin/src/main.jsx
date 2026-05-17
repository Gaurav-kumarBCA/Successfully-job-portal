import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>,
)


