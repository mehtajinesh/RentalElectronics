import "./editProfile.css";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import React, {useState} from 'react'
import { UpdateUser } from "../actions/user-action";
import {useNavigate } from 'react-router-dom'

// TODO: currently updating only the user on login state
const EditProfile = () => {
  const currentUser = useSelector(state => state.login.user);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const profileImg = currentUser.profileImg;

  const [firstName, setFirstName] = useState(currentUser.firstname);
  const [lastName, setLastName] = useState(currentUser.lastname);

  const [address1, setAddress1] = useState(currentUser.address1);
  const [address2, setAddress2] = useState(currentUser.address2);

  const [city, setCity] = useState(currentUser.city);
  const [state, setState] = useState(currentUser.state);
  const [zipcode, setZipcode] = useState(currentUser.zipcode);
  
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [email, setEmail] = useState(currentUser.email);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(UpdateUser({
      firstname: firstName,
      lastname: lastName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zipcode: zipcode,
      phoneNumber: phoneNumber,
      email: email,
      profileImg: profileImg
    }));

    // dispatch(UpdateLoginUser(user));

    navigate('/profile')
  }

  return(
    <div className="container my-6">

        <div className="mt-5">
          <h1 className="ps-3">Edit Profile</h1>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="pr-border border w-100 h-100 pt-4 mt-4">

                <div className="pt-4 d-flex flex-column">
                  <div className="d-flex align-self-center">
                    <img className="pr-profile-pic" alt="" src={currentUser.profileImg}/>
                  </div>
                  <div className="mt-1 align-self-center text-secondary text-decoration-underline">Update Photo</div>

                </div>
              </div>

            </div>

            <div className="ps-5 col-xl-8 col-lg-8 col-sm-8 col-md-8 mt-4">
              <div className="row">
                <h3 className="col-8 mb-4">About me</h3>
                <div className="col-4">
                  <div className="row">
                    <btn className="col me-3 float-end btn btn-outline-secondary" onClick={()=>navigate("/profile")}>Cancel</btn>
                    <btn className="col me-3 float-end btn btn-secondary e-pr-save-btn" onClick={handleUpdate}>Save</btn>
                  </div>
                </div>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="First Name"
                       className="form-control bg-body border-1 border-dark"
                       value = {firstName}
                       onChange = {(e) => setFirstName(e.target.value)}
                       />
                <label>First Name</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Last Name"
                       className="form-control bg-body border-1 border-dark"
                       value = {lastName}
                       onChange = {(e) => setLastName(e.target.value)}/>
                <label>Last Name</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Address"
                       className="form-control bg-body border-1 border-dark"
                       value = {address1}
                       onChange = {(e) => setAddress1(e.target.value)}/>
                <label>Address1</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Address"
                       className="form-control bg-body border-1 border-dark"
                       value = {address2}
                       onChange = {(e) => setAddress2(e.target.value)}/>
                <label>Address2</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Location"
                       className="form-control bg-body border-1 border-dark"
                       value = {city}
                       onChange = {(e) => setCity(e.target.value)}
                       />
                <label>City</label>
              </div>

              <div className="form-floating mt-4">
                    <select id="inputState" className="form-control bg-body border-1 border-dark" 
                      value={state} 
                      onChange={(e) => setState(e.target.value)}>

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


              <div className="form-floating mt-4">
                <input placeholder="Location"
                       className="form-control bg-body border-1 border-dark"
                       value = {zipcode}
                       onChange = {(e) => setZipcode(e.target.value)}
                       />
                <label>Zipcode</label>
              </div>


              <div className="form-floating mt-4">
                <input placeholder="Phone Number"
                       className="form-control bg-body border-1 border-dark"
                       value = {phoneNumber}
                       onChange = {(e) => setPhoneNumber(e.target.value)}
                       />
                <label>Phone Number</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Email Address"
                       className="form-control bg-body border-1 border-dark"
                       value = {email}
                       onChange = {(e) => setEmail(e.target.value)}
                       />
                       
                <label>Email Address</label>
              </div>

            </div>

          </div>

        </div>

  </div>
  );
}
export default EditProfile;