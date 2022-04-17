import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        // Send user to db
        setEmail('');
        setPassword('');
    };

  return (
    <>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
            
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">
                
                <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                    Sign Up
                </div>

                <div className="mx-4 mt-3 mb-2">

                    <div className="fg-bold fg-font-large">
                        Create Account
                    </div>
                    <small id="privacyText" className="form-text text-muted">Get instant access to all the electronics to rent in your area.</small>

                </div>

                <div className="login-input-fields mx-4 my-4">
                    <form onSubmit={handleSubmit}>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <label for="InputEmail">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <label for="InputPassword">Password</label>
                        </div>

                        <small id="privacyText" className="form-text text-muted">Read our <a href="#">Privacy Policy</a></small>

                    </form>

                    <Link to="1">
                        <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2">Agree and Continute</button>
                    </Link>
                
                    <p id="createAccount" className="form-text text-center mb-4">Already have an account? <Link to="/login">LOGIN</Link></p>

                </div>

            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>

         
</>
  )
}

export default Register