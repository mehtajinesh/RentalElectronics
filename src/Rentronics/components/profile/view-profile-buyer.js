import "./profile.css";
import reviews from "../data/reviews.json";
import {useSelector} from "react-redux";
import Reviews from "./review";
import {Link} from "react-router-dom";
import {useState} from "react";
import RecentRentals from "./recent-rentals";
import ListedItems from "./listed-items";
import Wishlist from "./wishlist";

const ViewProfileBuyer = ({buyer}) => {
  const user = useSelector(state => state.currentUser);
  const [active, setActive] = useState("rentals");

  return(
      <div className="container-fluid">

        <div className="mt-5 me-5">
          <h3 className="ms-2">Profile</h3>
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
                    <h4 className="mb-0">{user.firstName} {user.lastName}</h4>

                    <Link to="/editProfile" className="mt-0 text-secondary text-decoration-underline">
                      Edit profile
                    </Link>
                  </div>

                </div>


                <div className="mt-3">

                  <div>
                  <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item" onClick={() => setActive("rentals")}>
                      <a className={`nav-link ${active === "rentals" && `active`}`} aria-current="page">Last rentals</a>
                    </li>
                    <li className="nav-item" onClick={() => setActive("listed_items")}>
                      <a className={`nav-link ${active === "listed_items" && `active`}`} href="#">Listed Items</a>
                    </li>
                    <li className="nav-item" onClick={() => setActive("wishlist")}>
                      <a className={`nav-link ${active === "wishlist" && `active`}`} href="#">Wishlist</a>
                    </li>
                    <li className="nav-item" onClick={() => setActive("reviews")}>
                      <a className={`nav-link ${active === "reviews" && `active`}`} href="#">Reviews</a>
                    </li>
                  </ul>
                  </div>


                  <div className={`mt-4 ${active === "rentals"? `d-block`: `d-none`}`}>
                    <h5>My Recent Rentals</h5>
                    <RecentRentals/>
                  </div>


                  <div className={`mt-4 ${active === "listed_items"? `d-block`: `d-none`}`}>
                    <h5>My Listed Items</h5>
                    <ListedItems/>
                  </div>


                  <div className={`mt-4 ${active === "wishlist"? `d-block`: `d-none`}`}>
                    <h5>My Wishlist</h5>
                    <Wishlist/>
                  </div>


                  <div className={`mt-4 ${active === "reviews"? `d-block`: `d-none`}`}>
                    <h5>My Reviews</h5>
                    {reviews.map(review => <Reviews review={review}/>)}
                  </div>


                </div>

              </div>

            </div>
          </div>





        </div>

      </div>
  );
}
export default ViewProfileBuyer;