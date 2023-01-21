import React, { useState, useEffect} from 'react';
import swal from 'sweetalert';
import './App.css';




function productlist(){
    const [product, setProducts] = useState([]);
    const [formFields, setFormFields] = useState({id:0});
    const [search, setSearch] = useState('');


    useEffect(() =>{
       getProductlist();
    },[]);

    const getProductlist = () => {
        fetch("http://localhost:8000/products/")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const onClickUpdate = (event, item) => {
        fetch("http://localhost:8000/products/" + item.id)
            .then(response => response.json())
            .then(data => {
                setFormFields(data);
            })
            .catch((err) => {
                    console.log(err.message);
            });
    }

    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormFields(values=>({...values, [fieldName]: fieldValue}));
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        let id = formFields.id;
        let method = id > 0 ? 'PUT' : 'POST';
        fetch("http://localhost:8000/products/" + id, 
        {method: method, 
        body: JSON.stringify(formFields),
        headers:{'Content-type': 'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
            getProductlist();
        if (formFields.id > 0 ){
            swal({
                title: "Update Products",
                text: "Product successfully updated!",
                icon: "success",
                button: "OK",
              });
        }else{
            swal({
                title: "Add Products",
                text: "Product successfully added!",
                icon: "success",
                button: "Go to Product Maintenance",
              });
        }
        })
        .catch((err) => {
                console.log(err.message);
        });
    }
    
    
    const onClickDelete = (event, item) => {
        fetch("http://localhost:8000/products/" + item.id,{method:'Delete'})
            .then(response => response.json())
            .then(() => {
                getProductlist();
                swal({
                    title: "Deleted",
                    text: "Product successfully deleted!",
                    icon: "warning",
                    button: "Go to Product Maintenance",
                  });
            })
            .catch((err) => {
                    console.log(err.message);
            });
    }



   

    const handleSearch = event => {
        setSearch(event.target.value);
        fetch("http://localhost:8000/products/Description/" + event.target.value )
        .then(response => response.json())
        .then(() => {
            getProductlist();

        })
        .catch((err) => {
                console.log(err.message);
        });
    
        console.log('value is:', event.target.value);
      };
      
      

      
      
      
    

  return (
    <div >
   
        <div className="row justify-content-center g-3">
        <div className="col col-md-10 col-sm-12">

            <section className="pt-5 pb-5">
            <div className="container contactcontainer">
                <h1 className="px-3 contactustext"> Out of Stock Items</h1>
                
                    </div>
             
                    <div className="row " >
                        <div className="col col-sm-6 ">
                            <form onSubmit={onHandleSubmit} className="border p-5 pb-0 m-3 text-white rounded prodcont"  >
                   
               
                                <div className="row">
                                    <div className="col my-4">
                                    <input type="hidden" value={formFields.id}/>
                                        <label className="form-label namelabel blackfnt">Description :</label>
                                        <input type="text" className="form-control" name="Description" value={formFields.Description}  onChange={handleChange} disabled/>
                                    </div>
                                </div>
                             
                                    <div className="col my-2">
                                    <div className="row">
                                        
                                        <div>
                                      
                                   
                                      
                                        </div>
                                        <div class="row">
                             <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel blackfnt">Price :</label>
                                <input type="Number" className="form-control" name="Price" value={formFields.Price}  min="0" onChange={handleChange} disabled/>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel blackfnt">Stock :</label>
                            <input   type="Number" className="form-control" name="Stock" value={formFields.Stock}  min="0" onChange={handleChange} required/>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel blackfnt">Category :</label>
                                        <input   type="hidden" className="form-control" name="Category" value={formFields.Category}  onChange={handleChange} disabled/>
                                        <select  className="form-control" name="Category" value={formFields.Category}  onChange={handleChange} disabled>
                                        <option value=""> -- Please Select</option>
                                            <option value="NewArrivals">New Arrivals</option>
                                            <option value="BestSeller4">Best Seller</option>
                                            <option value="Trending">Trending</option>
                                           
                                        </select>
                                </div>
                                </div>

                                </div>
                                        </div>
                                    </div>
                          
                              


                                <div class="row">
                             <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel blackfnt">Promos :</label>
                                        <input   type="text" className="form-control" name="Promos" value={formFields.Promos}  onChange={handleChange} disabled/>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel blackfnt">Sold :</label>
                                        <input   type="number" min="0" className="form-control" name="Sold" value={formFields.Sold}  onChange={handleChange} disabled/>
                                </div>
                                </div>
                                </div>
                               

                               
                                
                                <div className=" row text-center">
                                    <div className="col my-3">
                                 
                                        <button className="btn btn-success ms-5 " >Submit</button>
                                    </div>
                                </div>
                        
                            </form>

     


                            </div>
                   
                            
                        <div className="col  col-sm-6 "  >
                     
                        
                        <div>  
          <div class="form-floating mb-3 mt-3">
          <input type="text" className="form-control " placeholder="Search By Description"  id="search" name="search" onChange={handleSearch} value={search}/>
          
          
            <label for="invoice">Search By Description : </label>
            </div>
            <div className="sort ">
                
            <label className="form-label namelabel ">Sort By Stocks : </label>
           
         
                 

                    <div class="form-check form-check-inline mx-1">
                    <input class="form-check-input" type="radio" name="Stocks" id="OutStock" value="0" checked/>
                    <label class="form-check-label greenfnt" for="OutStock">Out of Stocks</label>
                    </div>
                   
            </div>

          </div>
                        <div className="scroll overflow-scroll rounded me-2"    style={{height: '70vh', }}>
                           
                           
                      
                            { product.filter(item=>item.Stock === 0).map((item,)=>{
                                
                return (
                    
                   
   
                    <div className="card  text-center" key={item.id}>
                
                       
                        <div class=" a  ">
                        <div class="des" >Description : {item.Description}</div>
                        </div>

                        <div class="card-body ">
                        <div class="row">

                               <div class="col mt-5 col-sm-6 text-left"> 
                                            
                               <div class="text-left"> Price : ₱{item.Price.toLocaleString()}</div>
                                <div class="text-left"> Stock : {item.Stock.toLocaleString()} PCS
                                <div>Sold: {item.Sold} PCS</div>
                             <div>Category: {item.Category}</div>

                           <div>Promos: {item.Promos}</div>
                                </div>
                                </div>
                              
                                <div class="col col-sm-6">
                        <div> Photo: 
                         <img src={item.Image} className="card-img-top" alt={item.Description} title={item.Description}   style={{width: '30vh',height: '30vh',}}  />
                         </div>
                         </div>
                         
                        </div>
                         </div>
                       
                   
                      
                        
                      <div class="a ">
                        <button className="btn btn-primary" onClick={(event) => onClickUpdate(event, item)}>Update</button>
                        <button className="btn btn-danger ms-5 " onClick={(event) => onClickDelete(event, item)}>Delete</button>
                        </div>
                        
             

                    </div>
              
                );
            })}
                        </div>
                        </div>
                </div>
          
            </section>
            </div>
   
        </div>
    </div>
  )
}

export default productlist