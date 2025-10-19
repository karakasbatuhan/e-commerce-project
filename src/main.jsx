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
import Footer from './components/Footer.jsx'
import CategoryPick from './components/CategoryPick.jsx'
import ProductCategoryList from './components/ProductCategoryList.jsx'
import Slider from './components/Slider.jsx'
import C2a from './components/C2a.jsx'
import FeaturedPost from './components/FeaturedPost.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <HeroSlider />
      <Provider store={store}>
        <App />
      </Provider>
      <CategoryPick />
      <ProductCategoryList />
      <Slider />
      <C2a />
      <FeaturedPost />
    </main>
    <Footer />
  </StrictMode>,
)
