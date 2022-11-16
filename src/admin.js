import React from 'react'
import { useRef} from 'react';
import swal from 'sweetalert';
import Adminhome from './Admin/Adminhome';

<<<<<<< HEAD
function admin(){
  const email=useRef()
  const password=useRef()
  const getEmail=localStorage.getItem("emailData")
  const getPassword=localStorage.getItem("passwordData")
  const handleSubmit=()=>{
      if(email.current.value==="admin@cawayan.com"&&password.current.value==="12345"){
          localStorage.setItem("emailData","admin@cawayan.com")
          localStorage.setItem("passwordData","12345")
      }else{
        swal({
          title: "Wrong User ID or Password",
       
          icon: "warning",
          button: "ok",
        });
      }
=======

function admin() {
  return (

    <div>
        <AdminHeader/>
        
        <Footer/>
    
    </div>
    )
>>>>>>> 0139340e37722850f60f10cf70de453a25709c27
  }
 
  return(
        <div className="container">
      
            <div className="container contactcontainer" style={{height: '25vh', width: '70vh'}}>
          
            {
                getEmail&&getPassword?
                <Adminhome/>:
            <form onSubmit={handleSubmit} className="border p-5 pb-0 m-3 text-white rounded bg-light">
              <div class="row" style={{height: '15vh'}}>
              <div class="col col-sm-4">
                <img src="assets\images\icons\favicon.png" className="card-img-left" alt="products" style={{height: '10vh', width: '10vh'}}/>
                </div>
                <div class="col col-sm-8">
                <h1 className="px-3 contactustext">CAWAYAN ADMIN PORTAL</h1>
                </div>
                </div>

                <div>
                <label className="form-label namelabel">User ID :</label>
                    <input  className="form-control"  type="text" ref={email}  />
                </div>
                <div>
                <label className="form-label namelabel">Password:</label>
                    <input type="password" className="form-control" ref={password} />
                </div>
     

                <div className=" row text-center">
                                    <div className="col my-3">
                                    <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>


            </form>
            }
        </div>

          
        </div>

  )
}

export default admin;
