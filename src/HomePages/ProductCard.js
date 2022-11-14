import React from 'react'

function ProductCard({item, handleClick}) {
    const {Id, Image, Description, Price, Stock } = item;
  return (
    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card text-black">
                            <div className="cardcontent">
                            <img src={Image} className="card-img-top" alt={Description} title={Description} />
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                <h5 className="card-title">{Description}</h5>
                                <p className="text-muted mb-4"> ₱ {Price}.00</p>
                                <p className="text-muted mb-4">Stocks On Hand :{Stock} PCS</p>
                                <div className="pb-3">
                                <div className='d-none'>{Id}</div>
                                <span className ="fa fa-star checked"></span>   
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span>  
                                <span className ="fa fa-star checked"></span> (5) 
                                </div> 
                                <div>
                                    <a href="/checkout" className="sliderbtn m-1"><button className="btn click-btn btn-default text-white cobtn-inner">Buy Now</button></a>
                                    <button className="btn click-btn btn-default text-white atocbtn-inner" onClick={() => handleClick(item)}>Add to Cart</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default ProductCard