import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>    
      <App />
    </Provider>
  </StrictMode>,
)
