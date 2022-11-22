import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


function AdminHeader() {

    const handleClick=()=>{
        localStorage.clear();
        
        swal({
            title: "Logout",
            text: "You are now successfully logged out",
            icon: "warning",
            button: "ok",
          });
    }
    
    return (
            <div className='sticky-top'>
                <header className='header'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#top"><img src="assets\images\icons\Cawayan_logo.png" alt='CAWAYAN' height="26px" width="120px"/></a>
                            <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Dashboard" className='nav-link'>Dashboard</Link></li>
                                <li className="nav-item">
                                    <Link to="/products" className='nav-link'>Products</Link></li>
                                <li className="nav-item">
                                <Link to="/orderlist" className='nav-link'>Orders</Link></li>
                                <li className="nav-item">
                                <Link to="/customers" className='nav-link'>Customers</Link></li>
                              
                              
                       
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav nav1">
                                <li className="nav-item nav1">
                            
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className='nav-link'>Go to Home Page</Link></li>
                                <li className="nav-item">
                                    <Link to="" className='nav-link'><i class="fa fa-user"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" className='nav-link'>Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" onClick={handleClick} className='nav-link'>Logout</Link>
                                </li>
                                
                              
                            </ul>
                        </div>
                        
                        </div>
                    </nav>
                </header>
            </div>
  )
}

export default AdminHeader