import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'
import {Switch, Route } from 'react-router-dom';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>    
          
      <Footer />
    </>
    
  )
}
