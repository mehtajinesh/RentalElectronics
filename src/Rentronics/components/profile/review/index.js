import {Link} from "react-router-dom";

const Reviews = ({review}) => {

  const date = (review.reviewID.reviewDate.toString().substring(4,7)+", "+review.reviewID.reviewDate.toString().substring(11,16));

  return(
      <>
        <div className="mb-4 ri_border border w-100 h-100 ms-0">

          <div className="mt-3 d-flex flex-row ps-3 pb-3 pe-3">
            <div className="col-10">
              <div>
                <span className="fas fa-star"/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 2 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 3 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 4 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 5 ? `d-none`: ``}`}/>
              </div>
              <Link to={`/products/${review.productID._id}/view`} className="text-decoration-none row">
              <h6 className="mb-0 mt-2">{review.productID.productName}</h6>
              <div className="text-secondary">{date}</div>
              </Link>
            </div>

            <div className="col-2">
              <Link to={`/products/${review.productID._id}/view`} className="text-decoration-none row">
              <div className="align-self-center">
                <img className="pr-rental-pic rounded" alt="" src={review.productID.productImages[0]}/>
              </div>
              </Link>
            </div>
          </div>

          <div className="mt-2 ps-3 pe-3 mb-4 ms-4">
            {review.reviewID.reviewDescription}
          </div>

          <Link to={`/profile/${review.productID.sellerID._id}`} className="text-decoration-none row">
          <div className="row mt-1 pe-3 ps-3 mb-3">
            <div className="col-1 col-xl-1 col-lg-1 col-md-2 col-sm-2">
                <img className="pr-profile-pic-small" alt="" src={review.productID.sellerID.profilePicture}/>
            </div>

            <div className="mt-1 col-11 col-xl-11 col-lg-11 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-9">
                  <h6 className="mb-0 ms-2">{review.productID.sellerID.firstName} {review.productID.sellerID.lastName}</h6>
                  <div className="ms-2 text-secondary">{review.productID.sellerID.address.city}, {review.productID.sellerID.address.state}</div>
                </div>
                <div className="col-3">
                  <i className="fa"></i>
                </div>
              </div>
            </div>

          </div>
          </Link>

        </div>
      </>
  );
}
export default Reviews;