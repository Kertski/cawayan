import React from 'react'

function BestSellers() {
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
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\iufo.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Inverted UFO Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱499</p><p className="text-danger mb-4">SOLD OUT</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (209) 
                      </div> 
                      <div>
                        <button disabled className="btn click-btn btn-default text-white soldoutbtn1 m-1">Buy Now</button>
                        <button disabled className="btn click-btn btn-default text-white soldoutbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\ufo.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan UFO  Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱549</p><p className="mb-4 offer">BUY 3 GET 20% OFF</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (198) 
                      </div> 
                      <div className="display-end">
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\curve.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Hat Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱599</p><p className="mb-4 offer">BUY 3 GET 20% OFF</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (181) 
                      </div> 
                      <div>
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\mushroom.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Mushroom Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱549</p><p className="mb-4 text-danger">2 PCS. LEFT</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star unchecked"></span> (176) 
                      </div> 
                      <div>
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row justify-content-center g-3 d-flex">
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\wide.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Wide Hat Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱549</p><p className="mb-4 offer">BUY 2 GET 10% OFF</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (172) 
                      </div> 
                      <div>
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\bigp.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Big Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱249</p><p className="mb-4 offer" >BUY 2 GET 10% OFF</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (153) 
                      </div> 
                      <div>
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\smp.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Rattan Small Pendant Light Chandelier</h5>
                        <p className="text-muted mb-4">₱549</p><p className="text-danger mb-4">SOLD OUT</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span> (147) 
                      </div> 
                      <div>
                        <button disabled className="btn click-btn btn-default text-white soldoutbtn1 m-1">Buy Now</button>
                        <button disabled className="btn click-btn btn-default text-white soldoutbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                <div className="card text-black">
                  <div className="cardcontent">
                  <img src="assets\images\home\best-seller\Austria.png" className="card-img-top bs" alt="..."/>
                  </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Austria - Bamboo Rattan Fashion Bag</h5>
                        <p className="text-muted mb-4">₱1999</p><p className="mb-4 offer">20% OFF CODE: BMBRTN20</p>
                      <div className="pb-3">
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star checked"></span>  
                        <span className ="fa fa-star unchecked"></span> (130) 
                      </div> 
                      <div>
                        <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                        <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center g-3 d-flex">
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                  <div className="card text-black">
                    <div className="cardcontent">
                    <img src="assets\images\home\best-seller\Ivory.png" className="card-img-top bs" alt="..."/>
                    </div>
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">Ivory - Bamboo Rattan Fashion Bag</h5>
                          <p className="text-muted mb-4">₱2,349</p><p className="mb-4 offer">20% OFF CODE: BMBRTN20</p>
                        <div className="pb-3">
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span> (92) 
                        </div> 
                        <div>
                          <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                          <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                  <div className="card text-black">
                    <div className="cardcontent">
                    <img src="assets\images\home\best-seller\Pearl.png" className="card-img-top bs" alt="..."/>
                    </div>
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">Pearl - Bamboo Rattan Fashion Bag</h5>
                          <p className="text-muted mb-4">₱2,249</p><p className="text-danger mb-4">SOLD OUT</p>
                        <div className="pb-3">
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span> (76) 
                        </div> 
                        <div>
                          <button disabled className="btn click-btn btn-default text-white soldoutbtn1 m-1">Buy Now</button>
                          <button disabled className="btn click-btn btn-default text-white soldoutbtn2">Add to Cart</button>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                  <div className="card text-black">
                    <div className="cardcontent">
                    <img src="assets\images\home\best-seller\Rattan Duyan.png" className="card-img-top bs" alt="..."/>
                    </div>
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">Rattan Duyan Iron-Sitting Relaxing Chair</h5>
                          <p className="text-muted mb-4">₱1,109</p><p className="mb-4 offer">10% OFF CODE: DUYAN10</p>
                        <div className="pb-3">
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span> (55) 
                        </div> 
                        <div>
                          <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                          <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
                  <div className="card text-black">
                    <div className="cardcontent">
                    <img src="assets\images\home\best-seller\Bamboo Cup.png" className="card-img-top bs" alt="..."/>
                    </div>
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">Natural Bamboo Drinking Cup Mug</h5>
                          <p className="text-muted mb-4">₱329</p><p className="mb-4 offer">BUY 2 GET 1 FREE!</p>
                        <div className="pb-3">
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star checked"></span>  
                          <span className ="fa fa-star unchecked"></span> (47) 
                        </div> 
                        <div>
                          <button className="btn click-btn btn-default text-white sellingbtn1 m-1">Buy Now</button>
                          <button className="btn click-btn btn-default text-white sellingbtn2">Add to Cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
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
