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
import Dashboard from './Dashboard';
import Customer from './Customer';
import EggBasket from './EggBasket';
import FlatBackHangingBasket from './FlatBackHangingBasket';
import FlowerPlanter from './FlowerPlanter';
import RoundedBasket from './RoundedBasket';
import RegularBasket from './RegularBasket';
import FlowerVase from './FlowerVase';
import InvertedUfo from './InvertedUfo';
import UfoPendant from './UfoPendant';
import HatPendant from './HatPendant';
import Mushroom from './Mushroom';
import WideHat from './WideHat';
import BigPendant from './BigPendant';
import SmallPendant from './SmallPendant';
import AustriaBag from './AustriaBag';
import IvoryBag from './IvoryBag';
import PearlBag from './PearlBag';
import RattanDuyan from './RattanDuyan';
import BambooMug from './BambooMug';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const getOrderList = () => {
    fetch("https://cawayan-api.onrender.com/orders/")
    .then(response => response.json())
    .then(data => {
        setCart(data);
    })
    .catch((err) => {
            console.log(err.message);
    });
}

  const handleClick = (item)  => {
    let id = item.id;
    let method = id > 0 ? 'PUT' : 'POST';
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
    fetch("https://cawayan-api.onrender.com/orders/" + id, 
    {method: method, 
    body: JSON.stringify(item),
    headers:{'Content-type': 'application/json; charset=UTF-8',},
    })
    .then(response => response.json())
    .then(data => {
        setCart(data);
        getOrderList();
    })
    .catch((err) => {
            console.log(err.message);
    });
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
                <Route path="/about" element={<About size={cart.length}  cart={cart}/>}/>
                <Route path="/contact" element={<Contact size={cart.length}  cart={cart}/>}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
                <Route path="/register" element={<Register size={cart.length}  cart={cart}/>}/>
                <Route path="/login" element={<Login size={cart.length}  cart={cart}/>}/>
                <Route path="/checkout" element={<CheckoutPage size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/products" element={<Productlist/>}/>  
                <Route path="/orderlist" element={<OrderList/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/customers" element={<Customer/>}/>
                <Route path="eggbasket" element={<EggBasket size={cart.length}  cart={cart}/>}/>
                <Route path="/flatbackhangingbasket" element={<FlatBackHangingBasket cart={cart} />}/>
                <Route path="/flowerplanter" element={<FlowerPlanter cart={cart}/>}/>
                <Route path="/roundedbasket" element={<RoundedBasket cart={cart}/>}/>
                <Route path="/regularbasket" element={<RegularBasket cart={cart}/>}/>
                <Route path="/flowervase" element={<FlowerVase cart={cart}/>}/>
                <Route path="/invertedufo" element={<InvertedUfo cart={cart}/>}/>
                <Route path="/ufopendant" element={<UfoPendant cart={cart}/>}/>
                <Route path="/hatpendant" element={<HatPendant cart={cart}/>}/>
                <Route path="/mushroom" element={<Mushroom cart={cart}/>}/>
                <Route path="/widehat" element={<WideHat cart={cart}/>}/>
                <Route path="/bigpendant" element={<BigPendant cart={cart}/>}/>
                <Route path="/smallpendant" element={<SmallPendant cart={cart}/>}/>
                <Route path="/austriabag" element={<AustriaBag cart={cart}/>}/>
                <Route path="/ivorybag" element={<IvoryBag cart={cart}/>}/>
                <Route path="/pearlbag" element={<PearlBag cart={cart}/>}/>
                <Route path="/rattanduyan" element={<RattanDuyan cart={cart}/>}/>
                <Route path="/bamboomug" element={<BambooMug cart={cart}/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
