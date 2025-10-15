import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import Header from './components/Header.jsx'
import HeroSlider from './components/HeroSlider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSlider />
    <Provider store={store}>    
      <App />
    </Provider>
  </StrictMode>,
)
