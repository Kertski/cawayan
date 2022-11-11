import React, { useState, useEffect} from 'react';

function BestSellers() {
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
      <h2 className="text-center bestsellers h1">★ B E S T - S E L L E R S ★</h2>
     </div>
    

      <section>
      
        <div id="carousel-containerb" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
        
            <button type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="0" aria-current="true" className="active actvbtn"></button>
            <button class="crsbtn" type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="1" ></button>
            <button class="crsbtn" type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="2" ></button>
          </div>
        
        <div className="container py-5 carousel-inner justify-content-center mb-5">

          
      
        
            <div className="carousel-item active">
           
            <div className="row justify-content-center g-3 d-flex">
            {products.filter(products => products.Category  ===  "BestSeller" ).map((item)=>{
                return (
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
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
                          <span className ="fa fa-star unchecked"></span> (5) 
                        </div> 
                        <div>
                          <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                          <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
                     );
                    })}
           
              </div>
              
             
            </div>
      
              
          </div> 
            
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel-containerb" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
    
          <button className="carousel-control-next" type="button" data-bs-target="#carousel-containerb" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       
      </section>
      
      

    </div>
    )
}

export default BestSellers
