import "./profile.css";

const Profile = () => {

  return(
      <>

        <div className="mt-5 ms-5 me-5">
          <h1 className="ms-2">Profile</h1>

          <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <div className="pr-border border w-100 h-100 mt-4 ms-2">

            <div className="mt-4 d-flex flex-column">
              <div className="d-flex align-self-center">
                <img className="pr-profile-pic" alt="" src="https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880924/Boba-Stitch_800x800_SEPS-1000x1000.jpg"/>
              </div>

              <div className="mt-4 ms-4">
                <i className="fas fa-home mt-2"/>
                <span className="ms-2 text-body">Located in: City</span>

                <div className="private-data">
                  <i className="mt-3 fas fa-map-marker-alt"/>
                  <span className="ms-2 text-body">Address</span>
                  <br/>
                  <i className="mt-3 fas fa-mobile-alt"/>
                  <span className="ms-2 text-body">Phone number</span>
                  <br/>
                  <i className="mt-3 fas fa-envelope"/>
                  <span className="ms-2 text-body">Email address</span>
                </div>
              </div>
            </div>
          </div>

        </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-4 me-0">
              <div className="ps-5">
              <div className="d-flex">
                <div className="col-10 mb-0">
                  <h3 className="mb-0">First Name Last Name</h3>

                  <div className="mt-0 text-secondary text-decoration-underline">
                    Edit profile
                  </div>
                </div>

              </div>

              <h5 className="mt-4">
                My Recent Rentals (show 3)
              </h5>

              <hr/>


              <h5 className="mt-4">
                <span className="text-black">My Reviews</span>
              </h5>


              <div className="mt-4 mb-4">

                <div className="mt-2 d-flex flex-row">
                  <div className="col-10">
                    <div>
                      <i className="fas fa-star"/>
                      <i className="fas fa-star"/>
                      <i className="fas fa-star"/>
                      <i className="fas fa-star"/>
                      <i className="fas fa-star"/>
                    </div>
                    <h6 className="mb-0 mt-2">Rental Item Name</h6>
                    <div className="text-secondary">Month Year</div>
                  </div>

                  <div className="col-2">
                    <div className="align-self-center">
                      <img className="pr-rental-pic rounded" alt="" src="https://www.zdnet.com/a/img/resize/42d669282543a649bfe6a25b861a898e3f117054/2022/01/13/1a257540-68a4-4759-adac-19201fde6609/apple-macbook-air.png?width=1200&height=900&fit=crop&format=pjpg&auto=webp"/>
                    </div>
                  </div>
                </div>


                <div className="mt-2">
                  The review body: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <div className="row mt-3">
                  <div className="col-1 col-xl-1 col-lg-1 col-md-2 col-sm-2">
                    <img className="pr-profile-pic-small" alt="" src="https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880924/Boba-Stitch_800x800_SEPS-1000x1000.jpg"/>
                  </div>

                  <div className="mt-1 col-11 col-xl-11 col-lg-11 col-md-10 col-sm-10">
                    <h6 className="mb-0 ms-2">Name</h6>
                    <div className="ms-2 text-secondary">City, Country</div>
                  </div>

                </div>

              </div>

            </div>

            </div>
          </div>

        </div>

      </>
  );
}
export default Profile;