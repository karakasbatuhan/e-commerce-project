import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'
import SignUp from './pages/SignUp.jsx'
import {Switch, Route, useLocation } from 'react-router-dom';


export default function App() {
  const [count, setCount] = useState(0)

  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up'; 

  return (
    <>
    <Header />
      <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
    </>
    
  )
}
