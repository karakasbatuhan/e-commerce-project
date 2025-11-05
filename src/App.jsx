import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shop />
    </>
    
  )
}
