import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function FlowerVase({size, cart}) {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://cawayan-api.onrender.com/products')
    .then(response => response.json())
    .then(data => {
        setProducts(data);
    })
    .catch((err) => {
            console.log(err.message);
    });
},[]);

    
  return (
    <div>
      <Header size={cart.length}/>
        <section>
          <div className='container proddetailscont my-5'>
              {products.filter(products => products.id  ===  6).map((item)=>{
                return (     
                  <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                          <div className='pt-5'>
                              <h2 className='prodtitle'>{item.Description}</h2>
                          </div>
                        </div>
                        <div className='row img-prod'>
                          <div className='img-prod'>
                            <img className='card-img-prod' src={item.Image} alt=""/>
                          </div>
                        </div>
                    </div>
                    <div className='col-6'>
                      <div className='row pt-2 mt-5'>
                        <div className=''>
                          <h3>Description</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className=''>
                          <h5>Dimension (Height x Width X Length)</h5>
                          <p>8 X 7 X 8</p>
                        </div>
                        <div className=''>
                          <h5>Color</h5>
                            <p><FontAwesomeIcon icon={faSquare} className="fa-square" /> Brown (Natural Varnish)</p>
                        </div>
                        <div className=''>
                          <h5>Other Images</h5>
                          <p>
                            <FontAwesomeIcon icon={faSquare} className="fa-square-images1"/>
                            <FontAwesomeIcon icon={faSquare} className="fa-square-images2"/>
                            <FontAwesomeIcon icon={faSquare} className="fa-square-images3"/><br/>
                            <a href="/checkout" className="sliderbtn me-1 mt-3"><button className="btn click-btn btn-default text-white cobtn-inner">Buy Now</button></a>
                            <button className="btn click-btn btn-default text-white atocbtn-inner">Add to Cart</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      <Footer/>
    </div>
  )
}

export default FlowerVase
