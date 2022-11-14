import React, { useState, useEffect} from 'react';
import swal from 'sweetalert';
import './App.css';
import AdminHeader from './Admin/AdminHeader'
import Footer from './HomePages/Footer'



function productlist(){
    const [staff, setStaff] = useState([]);
    const [formFields, setFormFields] = useState({id:0});
    const [search, setSearch] = useState('');

    useEffect(() =>{
       getProductlist();
    },[]);

    const getProductlist = () => {
        fetch("http://localhost:8000/products/")
        .then(response => response.json())
        .then(data => {
            setStaff(data);
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
                button: "Go to Product Maintenance",
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
    
    const addHandler = (event) => {
        console.log('test'); 
        setFormFields({id:0, Description: "", Price: 0, Stock: 0, Category: "" ,  Image: "" ,  Promos: "" ,  Sold: 0});
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
    <AdminHeader/>
        <div className="row justify-content-center g-3">
        <div className="col col-md-10 col-sm-12">

            <section className="pt-5 pb-5">
            <div className="container contactcontainer">
                <h1 className="px-3 contactustext"> Product Maintenance</h1>
                
                    </div>
                <div className="container"  >
                    <div className="row " >
                        <div className="col col-sm-6 ">
                            <form onSubmit={onHandleSubmit} className="border p-5 pb-0 m-3 text-white rounded bg-light"  >
                   
               
                                <div className="row">
                                    <div className="col my-3">
                                    <input type="hidden" value={formFields.id}/>
                                        <label className="form-label namelabel">Description :</label>
                                        <input type="text" className="form-control" name="Description" value={formFields.Description}  onChange={handleChange} required/>
                                    </div>
                                </div>
                             
                                    <div className="col my-2">
                                    <div className="row">
                                        
                                        <div>
                                      
                                   
                                      
                                        </div>
                                        <div class="row">
                             <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel">Price :</label>
                                <input type="Number" className="form-control" name="Price" value={formFields.Price}  min="0" onChange={handleChange} required/>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel">Stock :</label>
                            <input   type="Number" className="form-control" name="Stock" value={formFields.Stock}  min="0" onChange={handleChange} required/>
                                </div>
                                </div>
                                </div>



                                        </div>
                                    </div>
                          
                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Category :</label>
                                        <input   type="text" className="form-control" name="Category" value={formFields.Category}  onChange={handleChange} required/>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Image URL:</label>
                                        <input   type="text" className="form-control" name="Image" value={formFields.Image}  onChange={handleChange} required/>
                                    </div>
                                </div>

                               

                                <div class="row">
                             <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel">Promos :</label>
                                        <input   type="text" className="form-control" name="Promos" value={formFields.Promos}  onChange={handleChange} required/>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col my-3">
                                <label className="form-label namelabel">Sold :</label>
                                        <input   type="number" min="0" className="form-control" name="Sold" value={formFields.Sold}  onChange={handleChange} required/>
                                </div>
                                </div>
                                </div>
                               

                               
                                
                                <div className=" row text-center">
                                    <div className="col my-3">
                                    <button className="btn btn-primary ms-1" onClick={(event) => addHandler(event)}>Add New Record</button>
                                        <button className="btn btn-success ms-5 ">Submit</button>
                                    </div>
                                </div>
                        
                            </form>

     


                            </div>
                   
                            
                        <div className="col  col-sm-6 "  >
                     
                        
                        
          <div class="form-floating mb-3 mt-3">
          <input type="text" className="form-control " placeholder="Search By Description"  id="search" name="search" onChange={handleSearch} value={search}/>
            <label for="invoice">Search By Description :</label>
          </div>
                        <div className="scroll overflow-scroll rounded me-2"    style={{height: '60vh', }}>
                           
                            {staff.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.Description.toLowerCase().includes(search);
              })
                            .map((item,)=>{
                                
                return (
                    
                   
   
                    <div className="card  text-center   " key={item.id}>
                
                        < div  >
                        <div class=" card card-header ">
                        <div >Description : {item.Description}</div>
                        </div>

                        <div class="card-body ">
        
                        <div class="row">

                               <div class="col mt-5 col-sm-6 text-left">
                        
                               <div class="text-left"> Price : ₱{item.Price}</div>
                                <div class="text-left"> Stock : {item.Stock} PCS
                             <div>Category: {item.Category}</div>
                           <div>Promos: {item.Promos}</div>
                        
                        <div>Sold: {item.Sold} PCS</div>

                                </div>
                                </div>
                              
                                <div class="col col-sm-6">
                        <div> Photo: 
                         <img src={item.Image} className="card-img-top" alt={item.Description} title={item.Description}   style={{width: '30vh',height: '30vh',}}  />
                         </div>
                         </div>
                        </div>
                         </div>
                         </div>
                       
                   
                      
                        
                      <div class="card-footer ">
                        <button className="btn btn-primary" onClick={(event) => onClickUpdate(event, item)}>Update</button>
                        <button className="btn btn-danger ms-5 " onClick={(event) => onClickDelete(event, item)}>Delete</button>
                      
                    </div>
                    </div>
              
                );
            })}
                        </div>
                        </div>
                </div>
            </div>
            </section>
            </div>
        <Footer/>
        </div>
    </div>
  )
}

export default productlist