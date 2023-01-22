import React, { useState, useEffect} from 'react';


function BestSellerContainer({category}) {

    
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://cawayan-api.onrender.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
        <>
            <div className="row justify-content-center g-3 d-flex">
                {products.filter(products => products.Category  == category).map((item)=>{
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
        </>
         )
}

export default BestSellerContainer
