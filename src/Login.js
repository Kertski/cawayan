import React from 'react'
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function Login() {
  return (
    <div>
        <Header/>
            <section className="pt-5 pb-5 loginsection">
                <div className="container logincontainer">
                    <div className="container logincontainer1">
                        <h1 className="px-3 logintext">Log In</h1>
                    </div>
                        <div className="container logincontainer2">
                            <div className="row">
                                <div className="col logincol">
                                    <form className="border p-5 pb-5 m-3 text-white rounded" action="index.html" target="_blank" method="GET">
                                        <fieldset>
                                            <legend className="loginlegend">Log Into Your Account</legend>
                                                <div className="row">
                                                    <div className="col my-3">
                                                        <label className="form-label accountlabel">Username/Email</label>
                                                        <input className="form-control" type="text" name="first-name" required/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label className="form-label accountlabel">Password</label>
                                                        <input className="form-control" type="password" name="password" required/>
                                                    </div>
                                                </div>
                                                <div className=" row pt-4">
                                                    <div className="col my-3">
                                                        <button className="btn btn-primary">Log In</button>
                                                        <div className="pt-3">
                                                            <a href="sign_up.html" className="text-black">Register</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Login;
