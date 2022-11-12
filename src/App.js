import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Admin from './admin';
import Register from './Register';
import Login from './Login';
import CheckoutPage from './CheckoutPage';
import Productlist from './productlist';

const App = () => {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/products" element={<Productlist/>}/>

            </Routes>
        </Router>
    </>
  );
}

export default App;
