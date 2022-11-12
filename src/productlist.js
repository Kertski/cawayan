import React, { useState, useEffect} from 'react';
import AdminHeader from './Admin/AdminHeader'
import Footer from './HomePages/Footer'

function productlist(){
    const [staff, setStaff] = useState([]);
    const [formFields, setFormFields] = useState({id:0});

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
        const fieldName = event.target.Description;
        const fieldValue = event.target.value;

        setFormFields(values=>({...values, [fieldName]: fieldValue }));
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
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const addHandler = (event) => {
        console.log('test'); 
        setFormFields({id:0, Description: "", Price: 0, Stock: 0, Category: "" ,  Image: "" ,  Promos: "" ,  Sold: ""});
    }
    const onClickDelete = (event, item) => {
        fetch("http://localhost:8000/products/" + item.id,{method:'Delete'})
            .then(response => response.json())
            .then(() => {
                getProductlist();
            })
            .catch((err) => {
                    console.log(err.message);
            });
    }
  return (
    <div>
        <AdminHeader/>
        <div className="row justify-content-center g-3">
        <div className="col col-md-10 col-sm-12">

            <section className="pt-5 pb-5">
            <div className="container contactcontainer">
                <h1 className="px-3 contactustext">List of Products</h1>
                <button className="btn btn-primary" onClick={(event) => addHandler(event)}>Add New Record</button>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-12">
                            <form onSubmit={onHandleSubmit} className="border p-5 pb-0 m-3 text-white rounded"  >
                   
               
                                <div className="row">
                                    <div className="col my-3">
                                    <input type="hidden" value={formFields.id}/>
                                        <label className="form-label namelabel">Description :</label>
                                        <input type="text" className="form-control" name="Description" value={formFields.Description}  onChange={handleChange} required/>
                                    </div>
                                </div>
                             
                                    <div className="col my-2">
                                        <div>
                                        <label className="form-label namelabel">Price :</label>
                                        <input type="Number" className="form-control" value={formFields.Price}  onChange={handleChange} required/>
                                   
                                        <label className="form-label namelabel">Stock :</label>
                                        <input   type="Number" className="form-control" value={formFields.Stock}  onChange={handleChange} required/>
                                        </div>
                                    </div>
                          
                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Category :</label>
                                        <input   type="text" className="form-control" value={formFields.Category}  onChange={handleChange} required/>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Image :</label>
                                        <input   type="text" className="form-control" value={formFields.Image}  onChange={handleChange} required/>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Promos :</label>
                                        <input   type="text" className="form-control" value={formFields.Promos}  onChange={handleChange} required/>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col my-3">
                                <label className="form-label namelabel">Sold :</label>
                                        <input   type="text" className="form-control" value={formFields.Sold}  onChange={handleChange} required/>
                                    </div>
                                </div>
                                
                                <div className=" row text-center">
                                    <div className="col my-3">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                        
                            </form>

     


                            </div>
                        <div className="col col-md-6 col-sm-12 ">
                            {staff.map((item,)=>{
                return (
                    <div className="card my-2 p-2" key={item.id}>
                        <div>Description : {item.Description}</div>
                        <div>Price : {item.Price}</div>
                        <div>Stock : {item.Stock}</div>
                        <div>Category: {item.Category}</div>
                        <div>Promos: {item.Promos}</div>
                        <div>Sold: {item.Sold}</div>
                        <div>Photo:  <img src={item.Image} className="card-img-top" alt={item.Description} title={item.Description}  width={10000}  height={300}   /></div>
                      <div>
                        <button className="btn btn-primary" onClick={(event) => onClickUpdate(event, item)}>Update</button>
                        <button className="btn btn-danger" onClick={(event) => onClickDelete(event, item)}>Delete</button>
                        </div>
                    </div>
                );
            })}
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