import React from 'react'
import {Link} from 'react-router-dom'

const RegisterPersonalInfo = () => {
  return (
    <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
            
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">
                
                <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                    Sign Up
                </div>

                <div className="mx-4 mt-3 mb-2">

                    <div className="fg-bold fg-font-large">
                        Personal Information
                    </div>
                    <small id="privacyText" className="form-text text-muted">Step 1 / Step 2</small>

                </div>

                <div className="login-input-fields mx-4 my-4">
                    <form>

                        <label for="inputName" className="text-muted mb-1">Name</label>

                        <div className="col form-floating mb-2">
                            <input type="text" className="form-control" id="InputFirstName" placeholder="First Name" required/>
                            <label for="InputFirstName">First Name</label>
                        </div>

                        <div className="col form-floating mb-4">
                            <input type="text" className="form-control" id="InputLastName" placeholder="Last Name" required/>
                            <label for="InputLastName">Last Name</label>
                        </div>

                        <label for="inputDob" className="text-muted mb-1">Date Of Birth</label>

                        <div className="form-floating mb-4">
                            <input type="date" className="form-control" id="InputDob" placeholder="Date of Birth" required/>
                            <label for="InputDob">Date Of Birth</label>
                            <small id="privacyText" className="form-text text-muted">Must be over the age of 18 to use the service.</small>
                        </div>



                        <div className="col form-floating mb-4">
                            <input type="tel" className="form-control" id="InputLastName" pattern="[+]{1}[0-9]{11,14}" placeholder="Phone Number" required/>
                            <label for="InputLastName">Phone Number</label>
                        </div>
               
                    </form>

                    <Link to="/register/2">
                        <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2">Continute</button>
                    </Link>

                    <p id="createAccount" className="form-text text-center mb-4">Already have an account? <Link to="/login">LOGIN</Link></p>

                </div>

            </div>

            <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
        </div>
    </div>
</>
  )
}

export default RegisterPersonalInfo