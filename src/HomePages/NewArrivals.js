import React, { useState, useEffect} from 'react';

function NewArrivals() {
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
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card text-black">
                            <div className="cardcontent">
                            <img src={item.Image} className="card-img-top" alt={item.Description} title={item.Description} />
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                <h5 className="card-title">{item.Description}</h5>
                                <p className="text-muted mb-4"> ₱ {item.Price}.00</p>
                                <p className="text-muted mb-4">Stocks On Hand :{item.Stock} PCS</p>
                                <div className="pb-3">
                                <span className ="fa fa-star checked"></span>   
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span> (5) 
                                </div> 
                                <div>
                                    <a href="/checkout" className="sliderbtn m-1"><button className="btn click-btn btn-default text-white cobtn-inner">Buy Now</button></a>
                                    <button className="btn click-btn btn-default text-white atocbtn-inner">Add to Cart</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     );
                    })}             
                </div>
            </div>
          
              
        </section>
          
        
        
        </div>
  )
}

export default NewArrivals;