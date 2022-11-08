import React from 'react'
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function Register() {
  return (
    <div>
        <Header/>
            <section className="registersection">
                <div className="container signupcontainer">
                    <h1 className="px-3 signuptext">Register</h1>
                </div>
                <div className="container">
                    <form className="border p-5 pb-0 m-3 text-white rounded" action="index.html" target="_blank" method="GET">
                        <fieldset>
                            <legend className="createacclegend">Create a New Account</legend>
                                <div className="row">
                                    <div className="col col-sm-12 col-md-6 my-3">
                                        <label className="form-label createacclabel">Username</label>
                                        <input className="form-control" type="text" name="first-name" required/>
                                    </div>
                                    <div className="col my-3">
                                        <label className="form-label createacclabel">Email</label>
                                        <input className="form-control" type="email" name="email" required placeholder="'example@gmail.com'"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <label className="form-label createacclabel">Password</label>
                                    <input className="form-control" type="password" name="password" required/>
                                    </div>
                                    <div className="col">
                                    <label className="form-label createacclabel">Confirm Password</label>
                                    <input className="form-control" type="password" name="password2" required/>
                                    </div>
                                </div>
                                    <div className=" row pt-4">
                                        <div className="col my-3">
                                            <button className="btn btn-primary">Sign Up</button>
                                            <div className="pt-3">
                                            <a href="log_in.html" className="text-black">Already have an account?</a>
                                        </div>
                                    </div>
                                </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Register;
