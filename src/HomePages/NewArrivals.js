import React, { useState, useEffect} from 'react';
import ProductCard from './ProductCard'

function NewArrivals({handleClick, warning}) {
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
        <div>
            <h2 className="text-center newarrival h1">N E W + A R R I V A L S</h2>
        </div>
        <section className="newarrivalcard" id="newarrival">
            <div className="container py-5">
                <div className="row justify-content-center g-3">
                {
                    warning && <div className='warning'>Item is already added to your cart</div>
                }
      
                {products.filter(products => products.Category  ===  "NewArrivals").map((item)=>{
                return (
                    <ProductCard  key={item.id} item={item} handleClick={handleClick}/>
                     );
                    })}    
                {
                    warning && <div className='warning'>Item is already added to your cart</div>
                }         
                </div>
            </div>
          
              
        </section>
          
        
        
        </div>
  )
}

export default NewArrivals;