import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as service from '../services/auth-service'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let loggedIn = useSelector(state => state.loggedIn);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        try {
            await service.login(email, password);
            
            loggedIn = true;

            dispatch({
                type:'UPDATE_LOGIN_STATE',
                loggedIn
            });

            alert("Login Successful");
            // navigate('/');
        } 
        catch (error) {
            console.log(error);
            alert("Invalid email or password");
        }
    }

    useEffect(() => { 
        if (loggedIn) {
        navigate('/');
    }})


    return (
    
        <div className="container">
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"/>
                <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 border rounded my-5">
                    <div className="text-center px-3 py-3 fw-bold border-bottom border-grey">
                        Login
                    </div>
                    <div className="mx-4 mt-3 mb-2 fw-bold fs-large">
                        Welcome to Rentronics
                    </div>
                    
                    <div className="mx-4 my-4">


                        <form noValidate className="needs-validation">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                                <label htmlFor="InputEmail">Email address</label>
                                <div className="invalid-feedback">
                                    Please provide an email address.
                                </div>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>
                                <label htmlFor="InputPassword">Password</label>
                                <div className="invalid-feedback">
                                    Please provide a password.
                                </div>
                            </div>

                            <div id="privacyText" className="form-text text-muted fs-6 ps-2">
                                <small>Read our <Link to="/privacy">Privacy Policy</Link></small>
                            </div>
                            
                            <button type="button" onClick={handleLogin}
                                    className="btn btn-primary w-100 my-4 px-2 py-2">Login
                            </button>
                        </form>
                        <p id="createAccount" className="form-text text-center mb-4">Need an account? <Link
                            to="/register">Sign Up</Link></p>
                    </div>
                </div>
                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"/>
            </div>
        </div>

    )
}
export default Login