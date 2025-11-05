import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <Provider store={store}>
        <App />
      </Provider>      
    </main>
    <Footer />
  </StrictMode>,
)
