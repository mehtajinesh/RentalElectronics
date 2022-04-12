import "./profile.css";

const EditProfile = () => {

  return(
      <>
        <div className="mt-5">
          <h1 className="ms-3">Edit Profile</h1>

          <div className="d-flex">
            <div className="me-4 col-lg-3 col-sm-4 col-md-4">
              <div className="pr-border border w-100 h-100 mt-4 ms-2">

                <div className="mt-4 d-flex flex-column">
                  <div className="d-flex align-self-center">
                    <img className="pr-profile-pic" alt="" src="https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880924/Boba-Stitch_800x800_SEPS-1000x1000.jpg"/>
                  </div>
                  <div className="mt-1 align-self-center text-secondary text-decoration-underline">Update Photo</div>

                </div>
              </div>

            </div>

            <div className="ms-5 me-lg-5-5 col-lg-9 col-sm-8 col-md-8 mt-4">
              <div className="d-flex">
                <h3 className="col-8 mb-4">About me</h3>
                <div className="col-4">
                  <div className="d-flex">
                  <btn className="me-4 ms-auto btn btn-outline-secondary">Cancel</btn>
                  <btn className="btn btn-secondary">Save</btn>
                  </div>
                </div>
              </div>


              <div className="form-floating mt-3">
                  <textarea placeholder="Bio"
                  className="form-control bg-body border-1 border-dark text-white"/>
                <label>Bio</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="First Name"
                       className="form-control bg-body border-1 border-dark"/>
                <label>First Name</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Last Name"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Last Name</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Location"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Location</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Language"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Language</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Occupation"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Occupation</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Address"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Address</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Phone Number"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Phone Number</label>
              </div>

              <div className="form-floating mt-4">
                <input placeholder="Email Address"
                       className="form-control bg-body border-1 border-dark"/>
                <label>Email Address</label>
              </div>

            </div>

          </div>

        </div>

      </>
  );
}
export default EditProfile;