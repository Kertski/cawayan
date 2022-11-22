import React from 'react'
import { useRef} from 'react';
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'
import swal from 'sweetalert';

const Login = ({size, cart}) => {

    const userName=useRef()
    const password=useRef()
    const getUserName=localStorage.getItem("userNameData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(userName.current.value==="cawayanuser"&&password.current.value==="12345"){
            localStorage.setItem("userNameData","cawayanuser")
            localStorage.setItem("passwordData","12345")
        }else{
          swal({
            title: "Wrong Username or Password",
            icon: "warning",
            button: "ok",
          });
        }
    }
   
  return (
    <>
        <div>
            <Header size={cart.length}/>
            {
                getUserName&&getPassword ? 
                <section>
                <div className='container successlogincont justify-content-center text-align-center'>
                    <h1 className='scslogintxt'>You are logged in!</h1>
                    <br />
                    <p>
                        <div><a className href='/'>Go to Home</a></div>
                    </p>
                </div>
            </section>
            :

                <section className="pt-5 pb-5 loginsection">
                    <div className="container logincontainer">
                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                        <div className="container logincontainer1">
                            <h1 className="px-3 logintext">Log In</h1>
                        </div>
                            <div className="container logincontainer2">
                                <div className="row">
                                    <div className="col logincol">
                                        <form className="border p-5 pb-5 m-3 text-white rounded" onSubmit={handleSubmit} method="GET">
                                            <fieldset>
                                                <legend className="loginlegend">Log Into Your Account</legend>
                                                    <div className="row">
                                                        <div className="col my-3">
                                                            <label className="form-label accountlabel" htmlFor='username'>Username</label>
                                                            <input 
                                                                className="form-control" 
                                                                type="text" 
                                                                name="first-name" 
                                                                id="username"
                                                                ref={userName}
                                                                autoComplete="off"
                                                                // onChange={(e) => setUserName(e.target.value)}
                                                                required/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label className="form-label accountlabel" htmlFor='password'>Password</label>
                                                            <input 
                                                                className="form-control" 
                                                                type="password" 
                                                                id="password" 
                                                                ref={password}
                                                                // onChange={(e) => setPwd(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className=" row pt-4">
                                                        <div className="col my-3">
                                                            <button className="btn btn-primary">Log In</button>
                                                            <div className="pt-3">
                                                                <a href="/register" className="text-black">Register</a>
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
                              
                }

            <Footer/>
        </div>
    </>
  )
}

export default Login;
