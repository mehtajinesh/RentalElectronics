import {Link, useNavigate} from "react-router-dom";
import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import * as service from '../services/auth-service'

const Register = () => {
    const email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // const password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const empty_regex = /\S+/;
    const phoneNumber_regex = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})( x\d{4})?$/;
    const zipcode_regex = /^\d{5}$/;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setlastName] = useState('');
    const [dob, setDOB] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState('');
    const [line1, setAddress1] = useState('');
    const [line2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Alaska');
    const [zipcode, setZipcode] = useState('');
    const [role, setRole] = useState('buyer');
    const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);

    const [showEmailError, setShowEmailError] = useState(null);
    const [showPasswordError, setShowPasswordError] = useState(null);
    const [showFirstnameError, setShowFirstnameError] = useState(null);
    const [showlastNameError, setShowlastNameError] = useState(null);
    const [showDobError, setShowDobError] = useState(null);
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(null);
    const [showLine1Error, setShowLine1Error] = useState(null);
    const [showCityError, setShowCityError] = useState(null);
    const [showStateError, setShowStateError] = useState(null);
    const [showZipcodeError, setShowZipcodeError] = useState(null);
    const [showAgreeToPrivacyError, setAgreeToPrivacyError] = useState(null);
    const [showFillOutFormError, setFillOutFormError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const checkEmail = () => {
        if (!email_regex.test(email))
        {
            setShowEmailError(true);
        } 
        else 
        {
            setShowEmailError(false);
        }
    }

    const checkPassword = () => {
        if (!empty_regex.test(password))
        {
            setShowPasswordError(true);
        } 
        else 
        {
            setShowPasswordError(false);
        }
    }

    const checkFirstname = () => {

        if (!empty_regex.test(firstName))
        {
            setShowFirstnameError(true);
        }
        else 
        {
            setShowFirstnameError(false);
        }
    }

    const checklastName = () => {

        if (!empty_regex.test(lastName))
        {
            setShowlastNameError(true);
        }
        else 
        {
            setShowlastNameError(false);
        }
        
    }

    const checkDOB = () => {

        if (!empty_regex.test(dob))
        {
            setShowDobError(true);
        }
        else 
        {
            setShowDobError(false);
        }
    }

    const checkPhoneNumber = () => {

        if (!phoneNumber_regex.test(phoneNumber))
        {
            setShowPhoneNumberError(true);
        }
        else 
        {
            setShowPhoneNumberError(false);
        }
    }

    const checkAddressLine1 = () => {

        if (!empty_regex.test(line1))
        {
            setShowLine1Error(true);
        }
        else 
        {
            setShowLine1Error(false);
        }
    }

    const checkCity = () => {

        if (!empty_regex.test(city))
        {
           setShowCityError(true);
        }
        else 
        {
            setShowCityError(false);
        }
    }

    const checkState = () => {

        if (!empty_regex.test(state))
        {
            setShowStateError(true);
        }
        else 
        {
            setShowStateError(false);
        }
    }

    const checkZipcode = () => {

        if (!zipcode_regex.test(zipcode))
        {
            setShowZipcodeError(true);
        }
        else 
        {
            setShowZipcodeError(false);
        }
    }

    const handleRegister = async () => {
        const newUser = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            DOB: dob,
            phoneNumber: phoneNumber,
            address: {
                line1: line1,
                line2: line2,
                city: city,
                state: state,
                zipcode: zipcode,
            },
            userType: role,
        }

        if (showDobError == null && showPasswordError == null && showFirstnameError == null && showlastNameError == null && showDobError == null
            && showPhoneNumberError == null && showLine1Error == null && showCityError == null && showStateError == null && showZipcodeError == null && showAgreeToPrivacyError == null) {
                setFillOutFormError(true);
                return;
            }


        if (!agreeToPrivacy)
        {
            setFillOutFormError(false);
            setAgreeToPrivacyError(true);
        }



        if (showEmailError === false && showPasswordError === false && showFirstnameError === false && showlastNameError === false && showDobError === false 
            && showPhoneNumberError === false && showLine1Error === false && showCityError === false && showStateError === false && showZipcodeError === false 
            && agreeToPrivacy === true) {

            try {
                const status = await service.register(newUser);
                alert('Account Successfully Created!')
                navigate('/login')
            }
            catch(error)
            {
                alert("Email already exists!")
            }
        } else {
            alert('Please fill out the form correctly!')
        }

    }


    return (<div className="container my-6">
        <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"/>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 border rounded  my-5">
                <div className="text-center px-3 py-3 fw-bold border-bottom border-grey">
                    Sign Up
                </div>

                <div className="mx-4 mt-3 mb-2">

                {
                    showFillOutFormError &&
                    
                    <div className="alert alert-warning alert-dismissible fade show mt-1" role="alert">
                        If you want to register please fill out the form below
                    </div>


                }


                    <div className="fw-bold fs-4">
                        Create Account
                    </div>
                    <div id="privacyText" className="form-text text-muted fs-6">
                        Get instant access to all the electronics to rent in your area.
                    </div>
                </div>
                <div className="mx-4 my-4">
                    <form className="needs-validation" noValidate>
                        <label htmlFor="InputEmail" className="text-muted mb-1">Login</label>
                        <div className="form-floating mb-2">
                            {
                                !showEmailError &&
                                <> 
                                    <input type="email" className="form-control" id="InputEmail"
                                        aria-describedby="emailHelp" placeholder="Enter email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={checkEmail} required/>
                                    <label htmlFor="InputEmail">Email address</label>
                                </>
                            }
                            {
                                showEmailError &&
                                <>
                                    <input type="email" className="form-control is-invalid" id="InputEmail"
                                        aria-describedby="emailHelp" placeholder="Enter email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={checkEmail} required/>
                                    <label htmlFor="InputEmail">Email address</label>

                                    <div id="validationServer03Feedback" class="invalid-feedback">
                                            Please provide a valid email
                                    </div>
                                </>
                            }
                        </div>
                        <div className="form-floating mb-4">
                            
                            {
                                !showPasswordError &&
                            
                                <>
                                    <input type="password" className="form-control" id="InputPassword"
                                        placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        onBlur={checkPassword} 
                                        required/>
                                    <label htmlFor="InputPassword">Password</label>
                                </>
                            }

                            {
                                showPasswordError &&
                                <>
                                    <input type="password" className="form-control" id="InputPassword"
                                        placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        onBlur={checkPassword} 
                                        required/>
                                    <label htmlFor="InputPassword">Password</label>
                            
                                    <div id="validationServer03Feedback" class="invalid-feedback">
                                            Please provide a password
                                    </div>
                                </>
                            }

   
                        </div>

                        <label htmlFor="InputFirstName" className="text-muted mb-1">Personal Information</label>

                        <div className="col form-floating mb-2">
                            {
                                !showFirstnameError && 
                                <>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="First Name"
                                        value={firstName} 
                                        onChange={(e) => setFirstname(e.target.value)} 
                                        onBlur={checkFirstname}
                                        required/>
                                    <label htmlFor="InputFirstName">First Name</label>
                                </>
                            }
                            {
                                showFirstnameError &&
                                <>
                                    <input type="text" className="form-control is-invalid" id="InputFirstName" placeholder="First Name"
                                        value={firstName} 
                                        onChange={(e) => setFirstname(e.target.value)} 
                                        onBlur={checkFirstname}
                                        required/>
                                    <label htmlFor="InputFirstName">First Name</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a firstname
                                    </div>
                                </>
                            }
                        </div>


                        <div className="col form-floating mb-2">
                            {
                                !showlastNameError && 
                                <>
                                    <input type="text" className="form-control" id="InputlastName" placeholder="Last Name"
                                        value={lastName} 
                                        onChange={(e) => setlastName(e.target.value)} 
                                        onBlur={checklastName}
                                        required/>
                                    <label htmlFor="InputlastName">Last Name</label>
                                </>
                            }
                            {
                                showlastNameError &&
                                <>
                                    <input type="text" className="form-control is-invalid" id="InputlastName" placeholder="Last Name"
                                        value={lastName} 
                                        onChange={(e) => setlastName(e.target.value)} 
                                        onBlur={checklastName}
                                        required/>
                                    <label htmlFor="InputlastName">Last Name</label>
                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a lastName
                                    </div>
                                </>
                            }

                        </div>
                        <div className="form-floating mb-2">
                            {
                                !showDobError && 
                                <>
                                    <input type="date" className="form-control" id="InputDob" placeholder="Date of Birth"
                                        value={dob} 
                                        onChange={(e) => setDOB(e.target.value)} 
                                        onBlur={checkDOB}
                                        required/>
                                    <label htmlFor="InputDob">Date Of Birth</label>
                                </>
                            }
                            {
                                showDobError &&
                                <>
                                    <input type="date" className="form-control is-invalid" id="InputDob" placeholder="Date of Birth"
                                        value={dob} 
                                        onChange={(e) => setDOB(e.target.value)} 
                                        onBlur={checkDOB}
                                        required/>
                                    <label htmlFor="InputDob">Date Of Birth</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a date of birth
                                    </div>
                                </>
                            }

                        </div>

                        <div className="col form-floating mb-4">
                            {
                                !showPhoneNumberError && 
                                <>
                                    <input type="tel" className="form-control" id="InputPhoneNumber"
                                        placeholder="Phone Number" value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)} 
                                        onBlur={checkPhoneNumber}
                                        required/>
                                    <label htmlFor="InputPhoneNumber">Phone Number</label>
                                </>
                            }
                            {
                                showPhoneNumberError &&
                                <>
                                    <input type="tel" className="form-control is-invalid" id="InputPhoneNumber"
                                        placeholder="Phone Number" value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)} 
                                        onBlur={checkPhoneNumber}
                                        required/>
                                    <label htmlFor="InputPhoneNumber">Phone Number</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a phone number
                                    </div>
                                </>
                            }
                        </div>

                        <label htmlFor="inputAddress" className="text-muted mb-1">Address</label>
                        <div className="form-floating mb-2">
                            {
                                !showLine1Error && 
                                <>
                                    <input type="text" className="form-control" id="InputAddress1" placeholder="Address"
                                        value={line1} 
                                        onChange={(e) => setAddress1(e.target.value)}
                                        onBlur={checkAddressLine1}
                                        required
                                        />
                                    <label htmlFor="InputAddress1">Address 1</label>
                                </>
                            }
                            {
                                showLine1Error &&
                                <>
                                    <input type="text" className="form-control is-invalid" id="InputAddress1" placeholder="Address"
                                        value={line1} 
                                        onChange={(e) => setAddress1(e.target.value)}
                                        onBlur={checkAddressLine1}
                                        required
                                        />
                                    <label htmlFor="InputAddress1">Address 1</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a valid address
                                    </div>
                                </>
                            }

                        </div>

                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputAddress2" placeholder="Address"
                                   value={line2} onChange={(e) => setAddress2(e.target.value)}/>
                            <label htmlFor="InputAddress2">Address 2 (Optional)</label>
                        </div>

                        <div className="form-floating mb-2">
                            {
                                !showCityError && 
                                <>
                                    <input type="text" className="form-control" id="InputCity" placeholder="City"
                                        value={city} 
                                        onChange={(e) => setCity(e.target.value)}
                                        onBlur={checkCity}
                                        required
                                        />
                                    <label htmlFor="InputCity">City</label>
                                </>
                            }
                            {
                                showCityError &&
                                <>
                                    <input type="text" className="form-control is-invalid" id="InputCity" placeholder="City"
                                            value={city} 
                                            onChange={(e) => setCity(e.target.value)}
                                            onBlur={checkCity}
                                            required
                                            />
                                    <label htmlFor="InputCity">City</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a valid city
                                    </div>
                                </>
                            }

                        </div>

                        <div className="form-floating mb-2">
                            {
                                !showStateError && 
                                <>
                                <select id="inputState" className="form-control" value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    onBlur={checkState}
                                    required>
                                    <option value="AK" selected>Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IA">Iowa</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MD">Maryland</option>
                                    <option value="ME">Maine</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MT">Montana</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NY">New York</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VA">Virginia</option>
                                    <option value="VT">Vermont</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <label htmlFor="InputCity">State</label>
                                </>
                            }
                            {
                                showStateError &&
                                <>
                                <select id="inputState" className="form-control is-invalid" value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    onBlur={checkState}
                                    required
                                    >
                                    <option value="">N/A</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IA">Iowa</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MD">Maryland</option>
                                    <option value="ME">Maine</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MT">Montana</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NY">New York</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VA">Virginia</option>
                                    <option value="VT">Vermont</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <label htmlFor="InputCity">State</label>

                                <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a valid state
                                    </div>
                                </>
                            }
                           
                        </div>

                        <div className="form-floating mb-4">
                            {
                                !showZipcodeError && 
                                <>
                                    <input type="text" id="inputZipcode" className="form-control" placeholder="Zipcode"
                                        value={zipcode} 
                                        onChange={(e) => setZipcode(e.target.value)}
                                        onBlur={checkZipcode}
                                        required
                                        />
                                    <label htmlFor="InputZipcode">ZipCode</label>
                                </>
                            }
                            {
                                showZipcodeError &&
                                <>
                                    <input type="text" id="inputZipcode" className="form-control is-invalid" placeholder="Zipcode"
                                        value={zipcode} 
                                        onChange={(e) => setZipcode(e.target.value)}
                                        onBlur={checkZipcode}
                                        required
                                        />
                                    <label htmlFor="InputZipcode">ZipCode</label>

                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide a valid zipcode
                                    </div>
                                </>
                            }

                        </div>
                        
                        <div>
                            <label htmlFor="inputRole" className="text-muted mb-1">What are you looking for?</label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                    id="buyerRadio" value="buyer"  
                                    onChange={(e) => setRole(e.target.value)}
                                    />
                                <label className="form-check-label" htmlFor="buyerRadio">To Rent</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                    id="buyerSellerRadio" value="seller"
                                    onChange={(e) => setRole(e.target.value)}/>
                                <label className="form-check-label" htmlFor="buyerSellerRadio">To Lease</label>
                            </div>

                        </div>

                        <div className="form-check mt-3">
                            {
                                <>
                                    <input className="form-check-input" type="checkbox" value={agreeToPrivacy} id="privacyPolicy"
                                            onChange={(e) => setAgreeToPrivacy(agreeToPrivacy => !agreeToPrivacy)}
                                            required/>
                                    <label className="form-check-label" htmlFor="privacyPolicy">
                                        Agree to <Link to="">Privacy Policy</Link>
                                    </label>
                                </>
                            }
                            
                            {
                                showAgreeToPrivacyError &&
                                <>
                                    <div id="validationServer03Feedback" className="text-danger">
                                        You must agree to use this service
                                    </div>    
                                </>

                            }                        
                            
                        </div>

                    </form>


                    <button type="button" onClick={handleRegister} className="btn btn-primary w-100 my-4 px-2 py-2">Sign Up</button>
                    <p id="createAccount" className="form-text text-center mb-4">Already have an account?<Link to="/login">Login</Link></p>

                </div>
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"/>

        </div>
    </div>)
}

export default Register;