import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
                
                <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">
                    
                    <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                        Login
                    </div>

                    <div className="mx-4 mt-3 mb-2 fg-bold fg-font-large">
                        Welcome to Rental Electornics
                    </div>

                    <div className="login-input-fields mx-4 my-4">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <label for="InputEmail">Email address</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                                <label for="InputPassword">Password</label>
                            </div>

                            <small id="privacyText" className="form-text text-muted">Read our <a href="#">Privacy Policy</a></small>

                        </form>

                        <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2">Login</button>
                    
                        <p id="createAccount" className="form-text text-center mb-4">Need an account? <Link to="/register">SIGN UP</Link></p>

                    </div>

                </div>

                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
            </div>
        </div>
    </>
  )
}

export default Login