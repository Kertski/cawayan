import React from 'react';

function ProductCard({item, handleClick}) {
    const {id, Image, Description, Price, Stock, URL } = item;

  return (
    <div className="col-md-8 col-lg-6 col-xl-4 d-flex">
                        <div className="card text-black">
                            <div className="cardcontent">
                            <a href={URL}><img src={Image} className="card-img-top" alt={Description} title={Description} />
                            </a>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                <a href={URL} className="prodtitlehref"><h5 className="card-title">{Description}</h5></a>
                                <p className="text-muted mb-4"> ₱ {Price}.00</p>
                                <p className="text-muted mb-4">Stocks On Hand :{Stock} PCS</p>
                                <div className="pb-3">
                                <div className='d-none'>{id}</div>
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