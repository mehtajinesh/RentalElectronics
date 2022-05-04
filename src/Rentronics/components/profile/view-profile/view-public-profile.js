import "./profile.css";
import { useEffect, useState } from 'react'
import Reviews from "../review";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/user-service"
import * as profileService from "../../services/profile-service"
// import ListedItems from "../listed-items";
import Wishlist from "../wishlist";
import * as authService from "../../services/auth-service";
import {useSelector, useDispatch} from "react-redux";
import Orders from "../review/orders";
import ReviewList from "../review/reviewList";

const ViewPublicProfile = () => {
  const {uid} = useParams();

  let update_profile = useSelector(state => state.updateReducer);
  let loggedIn = useSelector(state => state.loggedIn);
  let currentUser = useSelector(state => state.currentUser);

  const [user, setUser] = useState();
  const [active, setActive] = useState("wishlist");
  const [wishlists, setWishlists] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [sellerReviews, setSellerReviews] = useState([]);
  const navigate = useNavigate();

  const getPublicProfile = async () => {
    try {
      // if (currentUser._id === uid) {
      //   navigate('/profile')
      // }
      // else {
        await service.findUserById(uid).then((userData) => setUser(userData));

        await profileService.findReviewsByUser(uid).then(async (reviews) => {
          reviews.sort((review1, review2) =>
              new Date(review2.reviewID.reviewDate).getTime() -
              new Date(review1.reviewID.reviewDate).getTime());
          setReviews(reviews);
        });

      await profileService.findReviewsBySeller(uid).then(async (reviews) => {
        setSellerReviews(reviews);
      });

        const wishlist = await profileService.findWishlistByUser(uid);

        setWishlists(wishlist);

    // }
    }
    catch (e) {

    }
  }

  useEffect(() => {getPublicProfile()}, [update_profile]);

  return(

      <>
        {user &&
        <div className="container-fluid">

          <div className="mt-5 me-5">
            <h3 className="ms-2">Profile</h3>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="pr-border border w-100 mt-4 ms-2 mb-5">

                  <div className="mt-4 d-flex flex-column">
                    <div className="d-flex align-self-center">
                      <img className="pr-profile-pic" alt=""
                           src={user.profilePicture}/>
                    </div>

                    <div className="mt-4 ms-4 me-2">
                      <i className="fas fa-home mt-2"/>
                      <span
                          className="ms-2 text-body">Located in: {user.address.city}</span>

                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-4 me-0">
                <div className="ps-5">
                  <div className="d-flex">
                    <div className="col-10 mb-0">
                      <h4 className="mb-0">{user.firstName} {user.lastName}</h4>
{/* 
                      <Link to="/editProfile"
                            className="mt-0 text-secondary text-decoration-underline">
                        Edit profile
                      </Link> */}
                    </div>

                  </div>


                  <div className="mt-3">

                    <div>
                      <ul className="nav nav-tabs nav-fill">
                        <li className={`nav-item ${user.userType === "buyer" ? 'd-block': 'd-none'}`}
                            onClick={() => setActive("wishlist")}>
                          <a className={`nav-link ${active === "wishlist"
                          && `active`}`}>Wishlist</a>
                        </li>
                        <li className={`nav-item ${user.userType === "buyer" ? 'd-block': 'd-none'}`}
                            onClick={() => setActive("reviews")}>
                          <a className={`nav-link ${active === "reviews"
                          && `active`}`}>Reviews</a>
                        </li>
                      </ul>
                    </div>

                    <h5 className={`mt-3 ${user.userType === "seller" ? 'd-block': 'd-none'}`}>Reviews</h5>
                    {sellerReviews.map((review) => (
                        <ReviewList reviewList={review} key={review._id}/>
                    ))}

                    <div className={`mt-4 ${active === "wishlist" ? `d-block`
                        : `d-none`}`}>
                      <h5>Wishlist</h5>
                      {wishlists.map((wishlist) =>
                          <Wishlist wishlist={wishlist} key={wishlist._id}/>)}
                    </div>

                    <div className={`mt-4 ${active === "reviews" ? `d-block`
                        : `d-none`}`}>
                      <h5>Reviews</h5>
                      {reviews.map(review => <Reviews review={review} key={review._id}/>)}
                    </div>


                  </div>

                </div>

              </div>
            </div>


          </div>

        </div>
        }
      </>
  );
}
export default ViewPublicProfile;