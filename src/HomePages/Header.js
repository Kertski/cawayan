import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search'

function Header() {
    return (
            <div className='sticky-top'>
                <header className='header'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#top"><img src="assets\images\icons\Cawayan_logo.png" alt='' height="26px" width="120px"/></a>
                            <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/">Home</Link></li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link></li>
                                <li className="nav-item">
                                    <a className="nav-link" href=".#blogs">Blogs</a>
                                </li>  
                                <li className="nav-item">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <SearchBar />
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart"><i class="fa fa-shopping-cart"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login">Login</Link>
                                </li> 
                            </ul>
                        </div>
                        </div>
                    </nav>
                </header>
            </div>
  )
}

export default Header