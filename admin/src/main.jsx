import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position='bottom-right' toastOptions={{
        duration: 3000,

        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid #3b82f6",
          padding: "16px",
          borderRadius: "12px",
        },
      }}/>
  </StrictMode>,
)


