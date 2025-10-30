import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryPick from './components/CategoryPick.jsx'
import ProductCategoryList from './components/ProductCategoryList.jsx'
import Slider from './components/Slider.jsx'
import C2a from './components/C2a.jsx'
import FeaturedPost from './components/FeaturedPost.jsx'
import HeroSlider from './components/HeroSlider'

function App() {
  const [count, setCount] = useState(0)
  const root = document.getElementById('root')

  return (
    <>
      <div className='flex flex-col flex-wrap'>
        <HeroSlider />
        <CategoryPick />
        <ProductCategoryList />
        <Slider />
        <C2a />
        <FeaturedPost />
      </div>
    </>
    
  )
}

export default App
