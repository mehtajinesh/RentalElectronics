import "./profile.css";
import { useEffect, useState } from 'react'
import Reviews from "../review";
import {Link, useNavigate} from "react-router-dom";
import * as profileService from "../../services/profile-service"
import Wishlist from "../wishlist";
import Orders from "../review/orders";
import {useSelector, useDispatch} from "react-redux";
import ReviewList from "../review/reviewList";

const ViewProfile = () => {
  const navigate = useNavigate();

  let update_profile = useSelector(state => state.updateReducer);
  let loggedIn = useSelector(state => state.loggedIn);
  let currentUser = useSelector(state => state.currentUser);

  const [user, setUser] = useState();
  const [active, setActive] = useState("");
  const [orders, setOrders] = useState([]);
  const [sellerReviews, setSellerReviews] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [reviews, setReviews] = useState([]);


  const getProfile = async () => {
    try {
      const userId = currentUser._id;
      currentUser.userType === "buyer" ? setActive("rentals") : setActive("listed_items");

      await profileService.findAllRentalsByUser(userId).then(async (orders) => {
        orders.sort((order1, order2) =>
            new Date(order2.orderID.orderDate).getTime() -
            new Date(order1.orderID.orderDate).getTime());
        setOrders(orders);
      });

      await profileService.findReviewsBySeller(userId).then(async (reviews) => {
        setSellerReviews(reviews);
      });

      await profileService.findReviewsByUser(userId).then(async (reviews) => {
        reviews.sort((review1, review2) =>
            new Date(review2.reviewID.reviewDate).getTime() -
            new Date(review1.reviewID.reviewDate).getTime());
        setReviews(reviews);
      });

      const listings = await profileService.findAllListingsByUser(userId);
      const wishlist = await profileService.findWishlistByUser(userId);


      setUser(currentUser);
      setWishlists(wishlist);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
          
  if (!loggedIn) 
    navigate('/login');

  else
  getProfile()}, [update_profile]
  
  ); 
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

                    <div className="private-data">
                      <i className="mt-3 fas fa-map-marker-alt"/>
                      <span
                          className="ms-2 text-body">{user.address.line1},
                        <span className={`${user.address.line2 ? `d-block` : `d-none`}`}>{user.address.line2},</span> {user.address.city}, {user.address.state}, {user.address.zipcode}</span>
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

                    <Link to="/editProfile"
                          className="mt-0 text-secondary text-decoration-underline">
                      Edit profile
                    </Link>
                  </div>

                </div>


                <div className="mt-3">

                  <div>
                    <ul className="nav nav-tabs nav-fill">
                      <li className={`nav-item ${user.userType === "buyer" ? 'd-block': 'd-none'}`}
                          onClick={() => setActive("rentals")}>
                        <a className={`nav-link ${active === "rentals"
                        && `active`}`} aria-current="page">Last rentals</a>
                      </li>

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


                  <div className={`mt-4 ${active === "rentals" ? `d-block`
                      : `d-none`}`}>
                    <h5>My Recent Rentals</h5>
                    {orders.map((order) => (
                        <Orders userID={user._id} order={order} key={order._id}/>
                    ))}
                  </div>


                    <h5 className={`mt-3 ${user.userType === "seller" ? 'd-block': 'd-none'}`}>Reviews</h5>
                  {sellerReviews.map((review) => (
                      <ReviewList reviewList={review} key={review._id}/>
                  ))}


                  <div className={`mt-4 ${active === "wishlist" ? `d-block`
                      : `d-none`}`}>
                    <h5>My Wishlist</h5>
                    {wishlists.map((wishlist) =>
                        <Wishlist wishlist={wishlist} key={wishlist._id}/>)}
                  </div>

                  <div className={`mt-4 ${active === "reviews" ? `d-block`
                      : `d-none`}`}>
                    <h5>My Reviews</h5>
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
export default ViewProfile;