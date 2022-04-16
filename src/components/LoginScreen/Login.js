import React, {useState, useContext} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../header/index'
import LoginContext from '../../context/loginContext'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSucess] = useState(false);
    const [isLoggedin, setLoginStatus] = useContext(LoginContext);

    const handleSubmit = async e => {
        e.preventDefault();
        // Check if user exists in the db

        // update success
        setSucess(true);
        setLoginStatus(true);

        setEmail('');
        setPassword('');
    };

    return (
      <>
        <div className="container my-6">
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
                
                <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">
                    
                    {/* Heading */}
                    <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                        Login
                    </div>

                    {/* Welcome Text */}
                    <div className="mx-4 mt-3 mb-2 fg-bold fg-font-large">
                        Welcome to Rental Electornics
                    </div>

                    {/* Input form */}
                    <div className="login-input-fields mx-4 my-4">
                        <form>
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
                                <label for="InputEmail">Email address</label>
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

                                <label for="InputPassword">Password</label>
                            </div>

                            <small id="privacyText" className="form-text text-muted">Read our <Link to="">Privacy Policy</Link></small>

                            <Link to="">
                                <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2" onClick={handleSubmit}>Login</button>
                            </Link>

                        </form>
                    
                        <p id="createAccount" className="form-text text-center mßb-4">Need an account? <Link to="/register">SIGN UP</Link></p>

                    </div>

                </div>

                <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
            </div>
        </div>
    </>
  )
}
export default Login