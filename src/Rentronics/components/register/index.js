import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDOB] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [line1, setAddress1] = useState('');
    const [line2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState();
    const [role, setRole] = useState('buyer');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const AddUser = () => {
        let newUser = {
            email: email, 
            password: password,
            firstName: firstname, 
            lastName: lastname, 
            userType: role,
            DOB: dob,
            phoneNumber : phoneNumber,
            address: {
                line1: line1,
                line2: line2,
                city: city,
                state: state,
                zipcode: zipcode
            },
            reviews: [],
            listed_item: []
        }
        dispatch({
            type:'ADD_USER',
            newUser
        });
        
        navigate('/login');
    }

    // (function () {
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.querySelectorAll('.needs-validation')
    //     // Loop over them and prevent submission
    //     Array.prototype.slice.call(forms)
    //         .forEach(function (form) {
    //             form.addEventListener('submit', function (event) {
    //                 if (!form.checkValidity()) {
    //                     event.preventDefault()
    //                     event.stopPropagation()
    //                 }
    //                 form.classList.add('was-validated')
    //             }, false)
    //         })
    // })()

    return (<div className="container my-6">
        <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"/>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 border rounded  my-5">
                <div className="text-center px-3 py-3 fw-bold border-bottom border-grey">
                    Sign Up
                </div>
                <div className="mx-4 mt-3 mb-2">
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
                            <input type="email" className="form-control" id="InputEmail"
                                   aria-describedby="emailHelp" placeholder="Enter email" value={email}
                                   onChange={(e) => setEmail(e.target.value)} required/>
                            <label htmlFor="InputEmail">Email address</label>
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="InputPassword"
                                   placeholder="Password" value={password}
                                   onChange={(e) => setPassword(e.target.value)} required/>
                            <label htmlFor="InputPassword">Password</label>
                            <div className="invalid-feedback">
                                Please provide a valid password.
                            </div>
                        </div>
                        <label htmlFor="InputFirstName" className="text-muted mb-1">Personal Information</label>
                        <div className="col form-floating mb-2">
                            <input type="text" className="form-control" id="InputFirstName" placeholder="First Name"
                                   value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                            <label htmlFor="InputFirstName">First Name</label>
                            <div className="invalid-feedback">
                                Please provide a valid first name.
                            </div>
                        </div>
                        <div className="col form-floating mb-2">
                            <input type="text" className="form-control" id="InputLastName" placeholder="Last Name"
                                   value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                            <label htmlFor="InputLastName">Last Name</label>
                            <div className="invalid-feedback">
                                Please provide a valid last name.
                            </div>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="date" className="form-control" id="InputDob" placeholder="Date of Birth"
                                   value={dob} onChange={(e) => setDOB(e.target.value)} required/>
                            <label htmlFor="InputDob">Date Of Birth</label>
                            <div className="invalid-feedback">
                                You must be over the age of 18 to use the service.
                            </div>
                        </div>
                        <div className="col form-floating mb-4">
                            <input type="tel" className="form-control" id="InputLastName"
                                   pattern="[+]{1}[0-9]{11,14}" placeholder="Phone Number" value={phoneNumber}
                                   onChange={(e) => setPhoneNumber(e.target.value)} required/>
                            <label htmlFor="InputLastName">Phone Number</label>
                            <div className="invalid-feedback">
                                Please provide a phone number.
                            </div>
                        </div>
                        <label htmlFor="inputAddress" className="text-muted mb-1">Address</label>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputAddress1" placeholder="Address"
                                   value={line1} onChange={(e) => setAddress1(e.target.value)}/>
                            <label htmlFor="InputAddress1">Address 1</label>
                            <div className="invalid-feedback">
                                Please provide a valid address.
                            </div>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputAddress2" placeholder="Address"
                                   value={line2} onChange={(e) => setAddress2(e.target.value)}/>
                            <label htmlFor="InputAddress2">Address 2 (Optional)</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputCity" placeholder="City"
                                   value={city} onChange={(e) => setCity(e.target.value)}/>
                            <label htmlFor="InputCity">City</label>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="form-floating mb-2">
                            <select id="inputState" className="form-control" value={state}
                                    onChange={(e) => setState(e.target.value)}>
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
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="text" id="inputZipcode" className="form-control" placeholder="Zipcode"
                                   value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                            <label htmlFor="InputZipcode">Zip Code</label>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="inputRole" className="text-muted mb-1">What are you looking for?</label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                    id="buyerRadio" value="buyer" checked onChange={(e) => setRole(e.target.value)}/>
                                <label className="form-check-label" htmlFor="buyerRadio">Buyer</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                    id="buyerSellerRadio" value="buyer_seller"
                                    onChange={(e) => setRole(e.target.value)}/>
                                <label className="form-check-label" htmlFor="buyerSellerRadio">Buyer & Seller</label>
                            </div>
                        </div>

                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="privacyPolicy"
                                   required/>
                            <label className="form-check-label" htmlFor="privacyPolicy">
                                Agree to <Link to="">Privacy
                                Policy</Link>
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </form>
                    <button type="button" onClick={AddUser} className="btn btn-primary w-100 my-4 px-2 py-2">Sign Up
                    </button>
                    <p id="createAccount" className="form-text text-center mb-4">Already have an account? 
                    <Link to="/login">Login</Link></p>
                </div>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"/>
        </div>
    </div>)
}

export default Register;