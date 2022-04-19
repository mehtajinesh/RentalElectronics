import './login.css'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn } from '../../actions/login-action'
import { CheckUserExists } from '../../actions/user-action'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSucess] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Find if user exists in the data set
        // currently if exists, updates isSeached to true
        dispatch(CheckUserExists({email: email, password: password}));
        
        const currentUser = user.filter(user => user.isSearched === true);

        if (currentUser.length === 0) {
            setSucess(false);
        } else {
            // If user exists add user to login state
            dispatch(LogIn(currentUser[0].user));
            navigate('/');
        }
        
        setEmail('');
        setPassword('');

    }
    

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
                        
                        {!success && <div class="alert alert-danger" role="alert"> Wrong email and password</div>}
                        
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
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    required/>
                                <label for="InputEmail">Email address</label>
                            </div>

                            <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="InputPassword" 
                                    placeholder="Password" 
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    required/>

                                <label for="InputPassword">Password</label>
                            </div>

                            <small id="privacyText" className="form-text text-muted">Read our <Link to="">Privacy Policy</Link></small>

                            <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2" onClick={onSubmitHandler}>Login</button>

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