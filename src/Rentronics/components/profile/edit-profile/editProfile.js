import "./edit-profile.css";
import "../view-profile/profile.css";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as service from '../../services/user-service'
import * as authService from '../../services/auth-service'
import {useSelector, useDispatch} from "react-redux";

const EditProfile = () => {
  let loggedIn = useSelector(state => state.loggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const profile = useSelector(state => state.currentUser);
  const [currentUser, setCurrentUser] = useState();

  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [line1, setAddress] = useState();
  let [line2, setAddressOptional] = useState();
  let [city, setCity] = useState();
  let [state, setState] = useState();
  let [zipCode, setZipCode] = useState();
  let [phoneNumber, setPhoneNumber] = useState();
  let [email, setEmail] = useState();
  let [profilePicture, setProfilePicture] = useState();


  const getProfile = async () => {
    try {
      const profile = await authService.profile();

      const userData = await service.findUserById(profile._id);
      console.log(userData);
      setCurrentUser(userData);

      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setAddress(userData.address.line1);
      setAddressOptional(userData.address.line2);
      setCity(userData.address.city);
      setState(userData.address.state);
      setZipCode(userData.address.zipCode);
      setPhoneNumber(userData.phoneNumber);
      setEmail(userData.email);
      setProfilePicture(userData.profilePicture);

    } catch (e) {
      setCurrentUser();
    }
  }

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login')
    }
    else {
      getProfile();
    }

  }, []);


  const saveClickHandler = async () => {
    const updatedProfile = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: {
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        zipcode: zipCode
      }
    }

    try {
      await service.updateUser(currentUser._id, updatedProfile);

      const profile = updatedProfile;

      dispatch( {
        type: 'UPDATE_CURRENT_USER_PROFILE',
        profile
      }

      )
      
      navigate("/profile")

    }
    catch (e) {

    }


    // dispatch({type: 'UPDATE_CURRENT_USER_PROFILE', profile: updatedProfile});
  }

  const cancelClickHandler = async () => {
    /*setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setAddress(currentUser.address.line1);
    setAddressOptional(currentUser.address.line2);
    setCity(currentUser.address.city);
    setState(currentUser.address.state);
    setZipCode(currentUser.address.zipCode);
    setPhoneNumber(currentUser.phoneNumber);
    setEmail(currentUser.email);
    setProfilePicture(currentUser.profilePicture);*/
    try {

      navigate("/profile")

    }
    catch (e) {

    }
  }


  return(
      <>

        { currentUser &&

        <div className="mt-5">
          <h1 className="ps-3">Edit Profile</h1>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="pr-border border w-100 h-100 pt-4 mt-4">

                <div className="pt-4 d-flex flex-column">
                  <div className="d-flex align-self-center">
                    <img className="pr-profile-pic" alt="" src={profilePicture}/>
                  </div>

                </div>
              </div>

            </div>

            <div className="ps-5 col-xl-8 col-lg-8 col-sm-8 col-md-8 mt-4">
              <div className="row">
                <h3 className="col-8 mb-4">About me</h3>
                <div className="col-4">
                  <div className="row">
                    <btn className="col me-3 float-end btn btn-outline-secondary" onClick={cancelClickHandler}>Cancel</btn>
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
                <input value={line1} placeholder="Address"
                       className="form-control bg-body border-1 border-dark"
                       onChange={(event) => setAddress(event.target.value)}/>
                <label>Address</label>
              </div>

              <div className="form-floating mt-4">
                <input value={line2} placeholder="Address (optional)"
                       className="form-control bg-body border-1 border-dark"
                       onChange={(event) => setAddressOptional(event.target.value)}/>
                <label>Address 2 (Optional)</label>
              </div>

              <div className="form-floating mt-4">
                <input value={city} placeholder="City"
                       className="form-control bg-body border-1 border-dark"
                       onChange={(event) => setCity(event.target.value)}/>
                <label>City</label>
              </div>

              <div className="form-floating mt-4">
                <input value={state} placeholder="State"
                       className="form-control bg-body border-1 border-dark"
                       onChange={(event) => setState(event.target.value)}/>
                <label>State</label>
              </div>

              <div className="form-floating mt-4">
                <input value={zipCode} placeholder="Zipcode"
                       className="form-control bg-body border-1 border-dark"
                       onChange={(event) => setZipCode(event.target.value)}/>
                <label>Zipcode</label>
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
        }
      </>
  );
}
export default EditProfile;