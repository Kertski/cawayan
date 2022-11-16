import React, { useState, useEffect} from 'react';
import ProductCard from './ProductCard'

function NewArrivals({handleClick}) {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

<<<<<<< HEAD
    


=======
>>>>>>> 0139340e37722850f60f10cf70de453a25709c27
  return (
    
    <div>
        <div>
            <h2 className="text-center newarrival h1">N E W + A R R I V A L S</h2>
        </div>
   
        
        <section className="newarrivalcard" id="newarrival">
      
            <div className="container py-5">
                <div className="row justify-content-center g-3">
                {products.filter(products => products.Category  ===  "NewArrivals").map((item)=>{
                return (
                    <ProductCard key={item.id} item={item} handleClick={handleClick}/>
                     );
                    })}             
                </div>
            </div>
          
              
        </section>
          
        
        
        </div>
  )
}

export default NewArrivals;