import {useState} from "react";
import {Link} from "react-router-dom";

const RecentRentals = ({rental, date}) => {
  const [review, setReview] = useState(null);
  const [reviewForm, setReviewForm] = useState(null);

  const rentalItem = rental;
  const rentalDate = date;

  return(
      <>
        <div className="ri_border border w-100 h-100 ms-0">

            <Link to={`/products/${rentalItem._id}/view`} className="text-decoration-none row">
              <div className="row">

            <div className="col-2 mt-3 ps-4">
              <img className="pr-ri-pic rounded" alt="" src={rentalItem.productImages[0]}/>
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
            <div className="ps-3">
              <i className="fas fa-star"/>
              <i className="fas fa-star"/>
              <i className="fas fa-star"/>
              <i className="fas fa-star"/>
              <i className="fas fa-star"/>
            </div>
            <div className="ps-3 pe-3 mt-2">
            <textarea placeholder="Please leave review" className="w-100 border" value={review}
                      onChange={(event) => setReview(event.target.value)}/>
            <div className="btn btn-outline-primary rounded-pill float-end mt-1 mb-2 me-2">Add review</div>
            </div>

          </div>




        </div>
      </>
  );
}
export default RecentRentals;