import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify'



createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer 
            position = "top-right"
            autoClose = {3000}
            hideProgressBar = {false}
            closeOnClick = {false}
            pauseOnHover = {true}
            draggable = {true}
            progress = {undefined}
            theme = "light"
            transition = {Bounce}
          />
        </BrowserRouter>
      </Provider>     
)
