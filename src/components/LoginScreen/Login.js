import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-3"> </div>
                
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-6 login-box">
                    
                    <div className="login-title text-center px-2 py-2 fg-bold border-bottom border-light">
                        Login or Create Account
                    </div>

                    <div className="mx-4 mt-3 mb-2 fg-bold">
                        Welcome to Rental Electornics
                    </div>

                    <div className="login-input-fields mx-4 my-4">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <small id="privacyText" class="form-text text-muted">Read our Privacy Policy</small>

                        </form>

                        <button type="button" class="btn btn-primary w-100 mt-2 px-2 py-2">Login</button>
                    </div>

                </div>

                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-3"> </div>
            </div>
        </div>
    </>
  )
}

export default Login