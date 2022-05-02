import {useState} from "react";
import {Link} from "react-router-dom";
import * as profileService from "../../services/profile-service"
import { useDispatch, useSelector } from "react-redux";

const RecentRentals = ({rental, date, userID}) => {
  const dispatch = useDispatch();
  let update = useSelector(state => state.updateReducer);
  const [description, setDescription] = useState('');
  const [reviewForm, setReviewForm] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const rentalItem = rental;
  const rentalDate = new Date(date).toDateString();
  const reviewDate = Date.now();
  const ratingGiven = rating;
  const descriptionByUser = description;

  const rate = async () => {
    await profileService.createReviewByUser(userID, rentalItem._id, descriptionByUser, reviewDate, ratingGiven);

    update = !update;

    dispatch({
      type: 'UPDATE_PROFILE',
      update
    })

    setDescription("");
    setRating(0);
    setHover(0);
    setReviewForm(null);
  }

  return(
      <>
        <div className="ri_border border w-100 h-100 ms-0">

            <Link to={`/viewItem/${rentalItem._id}`} className="text-decoration-none row">
              <div className="row">

            <div className="col-2 mt-3 ps-4">
              <img className="pr-ri-pic rounded" alt="" src={rentalItem.productImages[8]}/>
            </div>

            <div className="col-8 mt-2 ps-4">
              <div className="fs-6 fw-bold">{rentalItem.productName}</div>
              <div className="text-secondary fs-6">{rentalDate}</div>
              <div className="fs-6">{rentalItem.productDescription}</div>
            </div>

            <div className="col-2 mt-3">
              <div className="ri-price-font fw-bold pe-2 float-start">{rentalItem.price} </div>
              <br/>
              <div className="ri-price-font fw-bold pe-2 float-start">USD</div>
            </div>
              </div>

            </Link>


          <div className={`btn btn-outline-primary rounded-pill float-end mt-1 mb-2 me-2 ${reviewForm ? "d-none" : "d-block" }`} onClick={() => setReviewForm("review")}>Add review</div>


          <div className={`mt-4 ${reviewForm ? "d-block" : "d-none"}`}>
            <div className="ps-3 star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={`button-star ${index <= (hover || rating) ? `on` : `off`}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                );
              })}
            </div>
            <div className="ps-3 pe-3 mt-2">
            <textarea placeholder="Please leave review" className="w-100 border" value={description}
                      onChange={(event) => setDescription(event.target.value)}/>
            <div className="btn btn-outline-primary rounded-pill float-end mt-1 mb-2 me-2" onClick={rate}>Add review</div>
            </div>

          </div>




        </div>
      </>
  );
}
export default RecentRentals;