import React from 'react'
import {Link} from 'react-router-dom'


const RegisterAdditionalInfo = () => {
  return (
    <>
            <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
            
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">
                
                <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                    Sign Up
                </div>

                <div className="mx-4 mt-3 mb-2">

                    <div className="fg-bold fg-font-large">
                        Personal Information
                    </div>
                    <small id="privacyText" className="form-text text-muted">Step 2 / Step 2</small>

                </div>

                <div className="login-input-fields mx-4 my-4">
                    <form>

                        <label for="inputAddress" className="text-muted mb-1">Address</label>

                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputAddress1" placeholder="Address"/>
                            <label for="InputAddress1">Address 1</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputAddress2" placeholder="Address"/>
                            <label for="InputAddress2">Address 2 (Optional)</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="InputCity" placeholder="City"/>
                            <label for="InputCity">City</label>
                        </div>

                        <div className="form-floating mb-2">
                            <select id="inputState" className="form-control">
                                <option selected value="">N/A</option>
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
                            <label for="InputCity">State</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="inputZipcode" className="form-control" placeholder="Zipcode"/>                           
                            <label for="InputZipcode">ZipCode</label>
                        </div>

                        <label for="inputRole" className="text-muted mb-1">What are you looking for?</label>
                    
                        <br></br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                            <label class="form-check-label" for="inlineRadio1">To Rent</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">To Lease</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" selected/>
                            <label class="form-check-label" for="inlineRadio3">Both</label>
                        </div>


                    </form>

                    <Link to="/login">
                        <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2">Sign Up</button>
                    </Link>

                    <p id="createAccount" className="form-text text-center mb-4">Already have an account? <Link to="/login">LOGIN</Link></p>

                </div>

            </div>

            <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>

</>
  )
}

export default RegisterAdditionalInfo