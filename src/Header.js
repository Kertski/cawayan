import React from 'react'

function Header() {
    return (
        <React.Fragment>
            <div>
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
                                    <a className="nav-link" href="#top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#newarrival">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#blogs">Blogs</a>
                                </li>  
                                <li className="nav-item">
                                    <a className="nav-link" href="about_us.html">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact Us</a>
                                </li> 
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link cart-icon" href="my_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="header">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="log_in.html">Log In</a>
                                </li> 
                            </ul>
                        </div>
                        </div>
                    </nav>
                </header>
            </div>
        </React.Fragment>
  )
}

export default Header