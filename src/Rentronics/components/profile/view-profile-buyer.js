import "./profile.css";
import reviews from "../data/reviews.json";
import {useSelector} from "react-redux";
import Reviews from "./review";
import {Link} from "react-router-dom";

const ViewProfileBuyer = ({buyer}) => {
  const user = useSelector(state => state.currentUser);

  return(
      <div className="container-fluid">

        <div className="mt-5 ms-5 me-5">
          <h1 className="ms-2">Profile</h1>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="pr-border border w-100 h-100 mt-4 ms-2">

                <div className="mt-4 d-flex flex-column">
                  <div className="d-flex align-self-center">
                    <img className="pr-profile-pic" alt="" src={user.profilePicture}/>
                  </div>

                  <div className="mt-4 ms-4">
                    <i className="fas fa-home mt-2"/>
                    <span className="ms-2 text-body">Located in: {user.address.city}</span>

                    <div className="private-data">
                      <i className="mt-3 fas fa-map-marker-alt"/>
                      <span className="ms-2 text-body">{user.address.line1}, {user.address.line2}, {user.address.city}, {user.address.state}, {user.address.zipcode}</span>
                      <br/>
                      <i className="mt-3 fas fa-mobile-alt"/>
                      <span className="ms-2 text-body">{user.phoneNumber}</span>
                      <br/>
                      <i className="mt-3 fas fa-envelope"/>
                      <span className="ms-2 text-body">{user.email}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-4 me-0">
              <div className="ps-5">
                <div className="d-flex">
                  <div className="col-10 mb-0">
                    <h3 className="mb-0">{user.firstName} {user.lastName}</h3>

                    <Link to="/editProfile" className="mt-0 text-secondary text-decoration-underline">
                      Edit profile
                    </Link>
                  </div>

                </div>

                <h5 className="mt-4">
                  My Recent Rentals
                </h5>

                <hr/>


                <h5 className="mt-4">
                  <span className="text-black">My Reviews</span>
                </h5>

                {reviews.map(review => <Reviews review={review}/>)}

              </div>

            </div>
          </div>
        </div>

      </div>
  );
}
export default ViewProfileBuyer;