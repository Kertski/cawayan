import React from 'react'
import { useRef, useState, useEffect} from 'react';
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

const Login = () => {
    const userRef = useRef();
    // const errRef = useRef();

    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    /* useEffect(() => {
       setErrMsg('');
     }, [userName, pwd]) */

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userName, pwd);
        setPwd('');
        setSuccess(true);
    }

    /* const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ userName, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ userName, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Wrong Username or Password');
            }
            errRef.current.focus();
        }
    } */


  return (
    <>
        <div>
            <Header/>
                {success ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <br />
                        <p>
                            <div>Go to Home</div>
                        </p>
                    </section>
                ) : ( 
                <section className="pt-5 pb-5 loginsection">
                    <div className="container logincontainer">
                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                        <div className="container logincontainer1">
                            <h1 className="px-3 logintext">Log In</h1>
                        </div>
                            <div className="container logincontainer2">
                                <div className="row">
                                    <div className="col logincol">
                                        <form className="border p-5 pb-5 m-3 text-white rounded" onSubmit={handleSubmit} action="index.html" target="_blank" method="GET">
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
                                                                ref={userRef}
                                                                autoComplete="off"
                                                                onChange={(e) => setUserName(e.target.value)}
                                                                value={userName}
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
                                                                ref={userRef}
                                                                onChange={(e) => setPwd(e.target.value)}
                                                                value={pwd}
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
                )}

            <Footer/>
        </div>
    </>
  )
}

export default Login;
