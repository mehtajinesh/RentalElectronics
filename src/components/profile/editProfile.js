import "./editProfile.css";
import "./profile.css";

const EditProfile = () => {

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
                  <btn className="col me-3 float-end btn btn-secondary e-pr-save-btn">Save</btn>
                  </div>
                </div>
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

  );
}
export default EditProfile;