import React from 'react'
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function Contact() {
  return (
    <div>
        <Header/>
            <section className="pt-5 pb-5">
            <div className="container contactcontainer">
                <h1 className="px-3 contactustext">Contact Us</h1>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-12">
                            <form className="border p-5 pb-0 m-3 text-white rounded" action="index.html" target="_blank" method="GET">
                            <fieldset>
                            <legend class="contactlegend">Contact Form</legend>
                                <div className="row">
                                    <div className="col my-3">
                                        <label className="form-label namelabel">Name</label>
                                        <input className="form-control" type="text" name="first-name" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <label className="form-label namelabel">Email</label>
                                        <input className="form-control" type="email" name="last-name" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label classname="namelabel">Your Message</label>
                                        <textarea className="form-control" name="message" required></textarea>
                                    </div>
                                </div>
                                <div className=" row text-center">
                                    <div className="col my-3">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                            </form>
                        </div>
                        <div className="col col-md-6">
                            <div className="card mt-3 d-flex pt-4 contactinfocard">
                                <div className="card-body">
                                    <div>
                                        <div>
                                            <h5>For any urgent matters please call or email us: info@cawayn.com</h5>
                                        </div>
                                        <div className="pt-3">
                                            <h5>Phone: +63 9912345678</h5>
                                        </div>
                                        <div>
                                            <h5>Email: info@cawayan.com</h5>
                                        </div>
                                        <div className="pt-4">
                                            <h5>Follow Us On Our Social Media:</h5>
                                        </div>
                                        <div className="pt-3">
                                            <a href="https://www.facebook.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='contactsocialhref'>
                                            <h5>
                                            <i className="fa fa-facebook"></i>  Facebook: /cawayanph
                                            </h5>
                                            </a>
                                        </div>
                                        <div>
                                            <a 
                                            href="https://www.tiktok.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='contactsocialhref'>
                                            <h5><i className="fa fa-tiktok"></i>Ⓣ Tiktok: @cawayanph
                                            </h5>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='contactsocialhref'>
                                            <h5>
                                            <i className="fa fa-instagram"></i>  Instagram: /cawayanph
                                            </h5>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.pinterest.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='contactsocialhref'>
                                            <h5>
                                            <i className="fa fa-pinterest"></i>  Pinterest: /cawayanph
                                            </h5>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Contact
