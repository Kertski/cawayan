
import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
function Adminhome() {
    const handleClick=()=>{
        swal({
            title: "Logout",
            text: "You are now successfully logged out",
            icon: "warning",
            button: "ok",
            timer: 4000000,
          });
        localStorage.clear();
        window.location.reload();
      
    }
    return (

        <div className="container" >
      
        <div className="container admincontainer border p-5 pb-0 m-3 my-5 text-white rounded bg-light" style={{height: '45vh', width: '90vh'}} >
        <div class="row" style={{height: '15vh'}}>
              <div class="col col-sm-4">
                <img src="assets\images\icons\favicon.png" className="card-img-left" alt="products" style={{height: '20vh', width: '20vh'}}/>
                <h1 className="px-3 contactustext">CAWAYAN </h1>
                </div>
                <div class="col col-sm-8">
     
                <h1 className=" contactustext">You are already logged in as Admin!</h1>
                <Link to="/Dashboard" className=" admincontainer">Proceed to Dashboard</Link><div className=" admincontainer">or</div>
                <div>
            <Link to="/admin"className=" admincontainer"  onClick={handleClick}>Proceed to Logout</Link>
            </div>
                          
                </div>
                </div>
        <>
          
          
                                
        </>
  
        </div>
        </div>
    )
}
export default Adminhome;