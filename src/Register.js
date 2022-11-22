import React from 'react';
import Header from './HomePages/Header';
import Footer from './HomePages/Footer';
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
// import axios from './api/axios'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const REGISTER_URL = '/register';

const Register = ({size, cart}) => {
    const userRef = useRef();
//    const errRef = useRef();

    const [userName, setUserName] = useState ('');
    const [validUserName, setValidUserName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState ('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    useEffect (() => {
        userRef.current.focus();
    }, [])
    
    useEffect (() => {
        const result = USER_REGEX.test(userName);
        console.log(result);
        console.log(userName);
        setValidUserName(result);
    }, [userName])

    useEffect (() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect (() => {
        const result = PWD_REGEX.test(pwd);
        console.log (result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

/*  useEffect(() => {
        setErrMsg('');
    }, [userName, pwd, matchPwd]) */

/*s  const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(userName);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ userName, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            setUserName('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
*/

  return (
   /* <> {success ? (
        <section>
            <h1>Success!</h1>
            <p>
                <div>Log In</div>
            </p>
        </section>
    ) : ( */
        <div>
            <Header size={cart.length}/>
                <section className="registersection">
                    <div className="container signupcontainer">
                        <h1 className="px-3 signuptext">Register</h1>
                    </div>
                    <div className="container">
                        <form className="border p-5 pb-0 m-3 text-white rounded" method="GET">
                            <fieldset>
                                <legend className="createacclegend">Create a New Account</legend>
                                    <div className="row">
                                        <div className="col col-sm-12 col-md-6 my-3">
                                            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                                            <label className="form-label createacclabel" htmlFor='username'>
                                                Username
                                                <FontAwesomeIcon icon={faCheck} className={validUserName ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validUserName || !userName ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUserName(e.target.value)}
                                                value={userName}
                                                required
                                                aria-invalid={validUserName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onBlur={() => setUserFocus(true)}
                                                onKeyDown={() => setUserFocus(false)}
                                                className="form-control"
                                            />
                                            <p id="uidnote" className={userFocus && userName && !validUserName ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                4 to 24 characters.<br />
                                                Must begin with a letter.<br />
                                                Letters, numbers, underscores, hyphens allowed.
                                            </p>

                                        </div>
                                        <div className="col my-3">
                                            <label className="form-label createacclabel" htmlFor='email'>
                                                Email
                                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                                    <FontAwesomeIcon icon={faTimes} className={validEmail|| !email ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                required
                                                aria-invalid={validEmail ? "false" : "true"}
                                                aria-describedby="uidnoteemail"
                                                onBlur={() => setEmailFocus(true)}
                                                onKeyDown={() => setEmailFocus(false)}
                                                className="form-control"
                                            />
                                            <p id="uidnoteemail" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Please enter a valid email address.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label createacclabel" htmlFor='password'>
                                                Password
                                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validPwd|| !pwd ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                ref={userRef}
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="uidnotepwd"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                                className="form-control"
                                            />
                                            <p id="uidnotepwd" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Must be atleast 8 characters.<br/>
                                                Must include uppercase and lowercase letters, a number and a special character.<br/>
                                                Allowed special characters:  
                                                <span aria-label="exclamation mark"> !</span> 
                                                <span aria-label="at symbol">@</span> 
                                                <span aria-label="hashtag">#</span> 
                                                <span aria-label="dollar sign">$</span> 
                                                <span aria-label="percent">%</span>
                                            </p>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="confirm_pwd" className="form-label createacclabel">
                                                Confirm Password
                                                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                type="password"
                                                id="confirm_pwd"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                required
                                                aria-invalid={validMatch ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setMatchFocus(true)}
                                                onBlur={() => setMatchFocus(false)}
                                                className="form-control"
                                            />
                                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Password do not match!
                                            </p>
                                        </div>
                                    </div>
                                        <div className=" row pt-4">
                                            <div className="col my-3">
                                                <button disabled={!validUserName || !validEmail || !validPwd || !validMatch ? true : false} className="btn btn-primary">Sign Up</button>
                                                <div className="pt-3">
                                                <a href="/login" className="text-black">Already have an account?</a>
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
