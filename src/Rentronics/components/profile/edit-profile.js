import "./edit-profile.css";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector(state => state.currentUser);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [location, setLocation] = useState(profile.address.city);
  let [address, setAddress] = useState(profile.address.line1);
  let [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  let [email, setEmail] = useState(profile.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveClickHandler = () => {
    const updatedProfile = {
      firstName, lastName, location, address, phoneNumber, email
    }
    dispatch({type: 'UPDATE_CURRENT_USER_PROFILE', profile: updatedProfile});
    navigate("/profile")
  }


  return(

      <div className="mt-5">
        <h1 className="ps-3">Edit Profile</h1>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
            <div className="pr-border border w-100 h-100 pt-4 mt-4">

              <div className="pt-4 d-flex flex-column">
                <div className="d-flex align-self-center">
                  <img className="pr-profile-pic" alt="" src="https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880924/Boba-Stitch_800x800_SEPS-1000x1000.jpg"/>
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
                  <btn className="col me-3 float-end btn btn-outline-secondary">Cancel</btn>
                  <button className="col me-3 float-end btn btn-secondary e-pr-save-btn" onClick={saveClickHandler}>Save</button>
                </div>
              </div>
            </div>

            <div className="form-floating mt-4">
              <input value={firstName} placeholder="First Name"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setFirstName(event.target.value)}/>
              <label>First Name</label>
            </div>

            <div className="form-floating mt-4">
              <input value={lastName} placeholder="Last Name"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setLastName(event.target.value)}/>
              <label>Last Name</label>
            </div>

            <div className="form-floating mt-4">
              <input value={location} placeholder="Location"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setLocation(event.target.value)}/>
              <label>Location</label>
            </div>

            <div className="form-floating mt-4">
              <input value={address} placeholder="Address"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setAddress(event.target.value)}/>
              <label>Address</label>
            </div>

            <div className="form-floating mt-4">
              <input value={phoneNumber} placeholder="Phone Number"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setPhoneNumber(event.target.value)}/>
              <label>Phone Number</label>
            </div>

            <div className="form-floating mt-4">
              <input value={email} placeholder="Email Address"
                     className="form-control bg-body border-1 border-dark"
                     onChange={(event) => setEmail(event.target.value)}/>
              <label>Email Address</label>
            </div>

          </div>

        </div>

      </div>

  );
}
export default EditProfile;