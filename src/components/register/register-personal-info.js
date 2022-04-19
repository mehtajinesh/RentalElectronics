import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RegisterInfo } from '../../actions/user-action';

const RegisterPersonalInfo = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDOB] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSubmit = e => {
        // e.preventDefault();

        dispatch(RegisterInfo({

            firstname: firstname,
            lastname: lastname,
            dob: dob,
            phoneNumber: phoneNumber,
        }));

        navigate("/register/2");
    };
 
  return (
    <>

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
                    <input type="text" className="form-control" id="InputFirstName" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                    <label for="InputFirstName">First Name</label>
                </div>

                <div className="col form-floating mb-4">
                    <input type="text" className="form-control" id="InputLastName" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                    <label for="InputLastName">Last Name</label>
                </div>

                <label for="inputDob" className="text-muted mb-1">Date Of Birth</label>

                <div className="form-floating mb-4">
                    <input type="date" className="form-control" id="InputDob" placeholder="Date of Birth" value={dob} onChange={(e) => setDOB(e.target.value)} required/>
                    <label for="InputDob">Date Of Birth</label>
                    <small id="privacyText" className="form-text text-muted">Must be over the age of 18 to use the service.</small>
                </div>

                <div className="col form-floating mb-4">
                    <input type="tel" className="form-control" id="InputLastName" pattern="[+]{1}[0-9]{11,14}" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                    <label for="InputLastName">Phone Number</label>
                </div>
        
            </form>

            <Link to="/register/2">
                <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2" onClick={handleSubmit}>Continute</button>
            </Link>

            <p id="createAccount" className="form-text text-center mb-4">Already have an account? <Link to="/login">LOGIN</Link></p>

        </div>

</>
  )
}

export default RegisterPersonalInfo