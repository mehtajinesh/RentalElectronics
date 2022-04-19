import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CreateUser } from "../../actions/user-action";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // TODO: Need to check if user exists

        // TODO: Need to do validation

        // Send user to db
        dispatch(CreateUser({
            email: email,
            password: password,
            
        }))

        navigate("1")

        setEmail('');
        setPassword('');
    };

  return (
    <>

        <div className="mx-4 mt-3 mb-2">

            <div className="fg-bold fg-font-large">
                Create Account
            </div>
            <small id="privacyText" className="form-text text-muted">Get instant access to all the electronics to rent in your area.</small>

        </div>

        <div className="login-input-fields mx-4 my-4">
            <form>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label for="InputEmail">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label for="InputPassword">Password</label>
                </div>

                <small id="privacyText" className="form-text text-muted">Read our <Link to="">Privacy Policy</Link></small>

            </form>

            <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2" onClick={handleSubmit}>Agree and Continute</button>
        
            <p id="createAccount" className="form-text text-center mb-4">Already have an account? <Link to="/login">LOGIN</Link></p>

        </div>

         
</>
  )
}

export default Register