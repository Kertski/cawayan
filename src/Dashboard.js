import React, { useState, useEffect} from 'react';
import AdminHeader from './Admin/AdminHeader'
import Footer from './HomePages/Footer'
import './App.css';



function Dashboard({item}){
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

let Stocktotal = 0

products.forEach(item=>{
Stocktotal = parseInt(Stocktotal) + parseInt(item.Stock)
});
const formattedStock  = Stocktotal.toLocaleString();

let Sales = 0
products.forEach(item=>{
Sales = parseInt(Sales) + parseInt(item.Amount)
});
const salesAmount  = Sales.toLocaleString();

let Sold = 0
products.forEach(item=>{
  Sold = parseInt(Sold) + parseInt(item.Sold)
});
const salesSold  = Sold.toLocaleString();





  return (

    <div >
        <AdminHeader/>
        
<div class="container  " >


  
<h1 className="px-3 contactustext"> Dashboard</h1>
<div class="row " >

<div class="col col-sm-3 my-3 " >
<div class="card border-success mb-3"  style={{height: '55vh'}}>
    <div class="card-body">
      <h5 class="card-title">Total Products:</h5>

      <div class="row">
      <div class="col">
      <img src="assets\images\icons\product.png" className="card-img-left" alt="products" style={{height: '10vh', width: '10vh'}}/>
      </div>

      <div class="col">
      <p class="card-text">{products.length}</p>
      </div>
      </div>

    </div>
    <div class="card-footer">
    <table class="table table-striped  table-hover">
    <thead>
    <tr>
      <th scope="col">Categories</th>
      <th scope="col">% Share</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Best Seller</th>
      <td>50%</td>
    </tr>
    <tr>
      <th scope="row">New Arrivals</th>
      <td>25%</td>
    </tr>
    <tr>
    <th scope="row">Trending Items</th>
      <td>25 %</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
  </div>
 

  <div class="col col-sm-3 my-3">
            
            <div class="card border-success mb-3"  style={{height: '55vh'}} >
                  
               
            
              
                <div class="card-body">
                  <h5 class="card-title">Total Orders:</h5>
            
                  <div class="row">
                  <div class="col">
                  <img src="assets\images\icons\order.png" className="card-img-left" alt="products" style={{height: '10vh', width: '10vh'}}/>
                  </div>
            
                  <div class="col">
                  <p class="card-text">45</p>
                  </div>
                  </div>
            
                </div>
                <div class="card-footer">
                <table class="table table-striped  table-hover">
                <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">% Share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Delivered</th>
                  <td>75%</td>
                </tr>
                <tr>
                  <th scope="row">Pending</th>
                  <td>15%</td>
                </tr>
                <tr>
                <th scope="row">Cancelled</th>
                  <td>10 %</td>
                </tr>
              </tbody>
            </table>
                </div>
              </div>
 </div>
 
 <div class="col col-sm-3 my-3">    
 
            <div class="card border-success mb-3"  style={{height: '55vh'}}  >      
                <div class="card-body">
                  <h5 class="card-title"> Stock Monitoring:</h5>
                  <div class="row">
                  <div class="col">
                  <img src="assets\images\icons\stock.png" className="card-img-left" alt="products" style={{height: '10vh', width: '10vh'}}/>
                  </div>
                  <div class="col">
                  <p class="card-text details">{formattedStock} <small class="smalldetails">IN PCS</small> </p>
                  </div>
                  </div>
                </div>
                <div class="card-footer">
                <table class="table table-striped  table-hover">
                <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Products</th>
                </tr>
              </thead>
              <tbody>
                <tr className="whitetext bg-danger ">
                  <th scope="row" class="text-warning">Out of Stock</th>
                  <td className="text-warning">2</td>
                </tr>
                <tr>
                  <th scope="row">Average Stock</th>
                  <td>5</td>
                </tr>
                <tr>
                <th scope="row">Slow Moving</th>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
                </div>
              </div>
 </div>


 <div class="col col-sm-3 my-3">
            
            <div class="card border-success mb-3"   style={{height: '55vh'}}>
                  
               
            
              
                <div class="card-body">
                  <h5 class="card-title">Total Sales:</h5>
            
                  <div class="row">
                  <div class="col">
                  <img src="assets\images\icons\sales.png" className="card-img-left" alt="products" style={{height: '10vh', width: '10vh'}}/>
                  </div>
            
                  <div class="col">
                  <p class="card-text detailsAmount">{salesSold}<small  className="smalldetails"> PCS</small> </p>
                  </div>
                  <p class="card-text detailsAmount1"><small>₱</small> {salesAmount}</p>
           
                  </div>
            
                </div>
                <div class="card-footer">
                <table class="table table-striped  table-hover">
                <thead>
                <tr>
                  <th scope="col">Categories</th>
                  <th scope="col">% Share</th>
                </tr>
              </thead>
              <tbody>
                        <tr>
                <th scope="row">Best Seller</th>
                <td>50%</td>
              </tr>
              <tr>
                <th scope="row">New Arrivals</th>
                <td>25%</td>
              </tr>
              <tr>
              <th scope="row">Trending Items</th>
                <td>25 %</td>
              </tr>
              </tbody>
            </table>
                </div>
              </div>
           
 </div>


</div>


</div>

<section class="custreview">
            <div className="container   pb-3 text-center ">
                <h2 className="h1 text pb-3">CUSTOMER REVIEWS</h2>
                <div className="row justify-content-center g-3">
                <div className="col-md-4 col-lg-4 col-xl-3 d-flex">
                    <div className="card text-black">
                        <div className="card-body">
                        <div className="text-center">
                            <h5 className="card-title">"Amazing handicrafts!"</h5>
                            <h9>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h9>
                            <div className="pt-4">
                            <div className="py-2">
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>
                            </div> 
                            <div>
                            <h7>- Juan dela Cruz</h7>
                            </div>
                            <div className="py-2">
                            <h7 className="text-muted">2 Hours Ago</h7>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-3 d-flex">
                    <div className="card text-black">
                        <div className="card-body">
                        <div className="text-center">
                            <h5 className="card-title">"Worth the price"</h5>
                            <h9>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Mi quis hendrerit dolor magna eget. Eu scelerisque felis imperdiet proin. </h9>
                            <div className="pt-5">
                            <div className="py-2 starjustify">
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>
                            </div> 
                            <div>
                            <h7>- Xavier</h7>
                            </div>
                            <div className="py-2">
                            <h7 className="text-muted">5 Hours Ago</h7>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-3 d-flex">
                    <div className="card text-black">
                        <div className="card-body">
                        <div className="text-center">
                            <h5 className="card-title">"OMG! Love the design!"</h5>
                            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer. Sem fringilla ut morbi tincidunt augue.</h9>
                            <div className="py-2">
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>
                            </div> 
                            <div>
                            <h7>- Marites Ramos</h7>
                            </div>
                            <div className="py-2">
                            <h7 className="text-muted">7 Hours Ago</h7>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-3  d-flex">
                    <div className="card text-black">
                        <div className="card-body">
                        <div className="text-center">
                            <h5 className="card-title">"Wow! My wife loved it."</h5>
                            <h9>A cras semper auctor neque vitae tempus quam. Eu scelerisque felis imperdiet proin. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Cursus in hac habitasse platea dictumst quisque sagittis purus.</h9>
                            <div className="py-2">
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>  
                            <span className ="fa fa-star checked"></span>
                            </div> 
                            <div>
                            <h7>- Juan N. Only</h7>
                            </div>
                            <div className="py-2">
                            <h7 className="text-muted">12 Hours Ago</h7>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="pt-3">
                <h5 class="seeallreviews">See All Reviews</h5>
                </div>
            </div>
            </div>
    </section>

        <Footer/>
    
    </div>
    )
  }
  
  export default Dashboard