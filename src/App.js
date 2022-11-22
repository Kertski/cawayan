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
import EggBasket from './Products/EggBasket'
import FlatBackHangingBasket from './Products/FlatBackHangingBasket';
import FlowerPlanter from './Products/FlowerPlanter';
import RoundedBasket from './Products/RoundedBasket';
import RegularBasket from './Products/RegularBasket';
import FlowerVase from './Products/FlowerVase';
import InvertedUfo from './Products/InvertedUfo';
import UfoPendant from './Products/UfoPendant';
import HatPendant from './Products/HatPendant';
import Mushroom from './Products/Mushroom';
import WideHat from './Products/WideHat';
import BigPendant from './Products/BigPendant';
import SmallPendant from './Products/SmallPendant';
import AustriaBag from './Products/AustriaBag';
import IvoryBag from './Products/IvoryBag';
import PearlBag from './Products/PearlBag';
import RattanDuyan from './Products/RattanDuyan';
import BambooMug from './Products/BambooMug';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const getOrderList = () => {
    fetch("http://localhost:8000/orders/")
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
    fetch("http://localhost:8000/orders/" + id, 
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
                <Route path="/eggbasket" element={<EggBasket size={cart.length}  cart={cart}/>}/>
                <Route path="/flatbackhangingbasket" element={<FlatBackHangingBasket size={cart.length} cart={cart} />}/>
                <Route path="/flowerplanter" element={<FlowerPlanter size={cart.length} cart={cart}/>}/>
                <Route path="/roundedbasket" element={<RoundedBasket size={cart.length} cart={cart}/>}/>
                <Route path="/regularbasket" element={<RegularBasket size={cart.length} cart={cart}/>}/>
                <Route path="/flowervase" element={<FlowerVase size={cart.length} cart={cart}/>}/>
                <Route path="/invertedufo" element={<InvertedUfo size={cart.length} cart={cart}/>}/>
                <Route path="/ufopendant" element={<UfoPendant size={cart.length} cart={cart}/>}/>
                <Route path="/hatpendant" element={<HatPendant size={cart.length} cart={cart}/>}/>
                <Route path="/mushroom" element={<Mushroom size={cart.length} cart={cart}/>}/>
                <Route path="/widehat" element={<WideHat size={cart.length} cart={cart}/>}/>
                <Route path="/bigpendant" element={<BigPendant size={cart.length} cart={cart}/>}/>
                <Route path="/smallpendant" element={<SmallPendant size={cart.length} cart={cart}/>}/>
                <Route path="/austriabag" element={<AustriaBag size={cart.length} cart={cart}/>}/>
                <Route path="/ivorybag" element={<IvoryBag size={cart.length} cart={cart}/>}/>
                <Route path="/pearlbag" element={<PearlBag size={cart.length} cart={cart}/>}/>
                <Route path="/rattanduyan" element={<RattanDuyan size={cart.length} cart={cart}/>}/>
                <Route path="/bamboomug" element={<BambooMug size={cart.length} cart={cart}/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
