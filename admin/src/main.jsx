import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import AuthProvider from './stores/auth.store.jsx';
import ThemeProvider from './stores/themeStore.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <AuthProvider>
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
  </AuthProvider>
  </ThemeProvider>
)


