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
import Login from './pages/Login.jsx'
import {Switch, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions/clientActions.js'
import axios from 'axios';


export default function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up'; 

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if(token){
      axios.defaults.headers.common['Authorization'] = token;
      axios.get("https://workintech-fe-ecommerce.onrender.com/verify")
      .then((response) => {
        dispatch(setUser(response.data));

        if(localStorage.getItem("token")){
          localStorage.setItem("token", response.data.token);
        }else{
          sessionStorage.setItem("token", response.data.token);
        }   
        axios.defaults.headers.common['Authorization'] = response.data.token; 
      })
      .catch((error) => {
          console.error("Auto login failed:", error);
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
      delete axios.defaults.headers.common['Authorization'];
      });
    }
  }, [dispatch]);
  return (
    <>
    <Header />
      <ScrollToTop />
        <Switch>   
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
           <ProductDetail />
          </Route>  
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/shop/:gender/:categoryName/:categoryId">
            <Shop />
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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
    </>
    
  )
}
