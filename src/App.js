import React, {useState} from 'react';
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
import OrderList from './OrderList';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item)  => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        return ;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].Amount += d;
		
		if (tempArr[ind].Amount === 0)
			tempArr[ind].Amount = 1;
		setCart([...tempArr])
  }

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home handleClick={handleClick} warning={warning} cart={cart} setCart={setCart}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={<CheckoutPage cart={cart}/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/products" element={<Productlist/>}/>

            </Routes>
        </Router>
    </>
  );
}

export default App;
