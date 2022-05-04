import {Link} from "react-router-dom";

const SellerReviews = ({review, product}) => {

  const date =  new Date(review.reviewID.reviewDate).toDateString();
  console.log(date);

  // const mydate = new Date(date);
  // console.log(mydate.toDateString());

  return(
      <>
        <div className="mb-4 ri_border border w-100 h-100 ms-0">

          <div className="mt-3 d-flex flex-row ps-3 pb-3 pe-3">
            <div className="col-10 col-xl-10 col-lg-10 col-md-9 col-sm-8">
              <div>
                <span className="fas fa-star"/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 2 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 3 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 4 ? `d-none`: ``}`}/>
                <span className={`fas fa-star ${review.reviewID.reviewRating < 5 ? `d-none`: ``}`}/>
              </div>
              <Link to={`/viewItem/${product._id}`} className="text-decoration-none row">
                <h6 className="mb-0 mt-2">{product.productName}</h6>
                <div className="text-secondary">{date}</div>
              </Link>
            </div>

            <div className="col-2 col-xl-2 col-lg-2 col-md-3 col-sm-4">
              <Link to={`/viewItem/${product._id}`} className="text-decoration-none row">
                <div className="align-self-center">
                  <img className="pr-rental-pic rounded me-2" alt="" src={product.productImages[0]}/>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-2 ps-3 pe-3 mb-4 ms-4">
            {review.reviewID.reviewDescription}
          </div>

          <Link to={`/profile/${review.userID._id}`} className="text-decoration-none row">
            <div className="row mt-1 pe-3 ps-4 mb-3">
              <div className="col-1 col-xl-1 col-lg-1 col-md-2 col-sm-2">
                <img className="pr-profile-pic-small" alt="" src={review.userID.profilePicture}/>
              </div>

              <div className="mt-1 col-11 col-xl-11 col-lg-11 col-md-10 col-sm-10 ps-4">

                <h6 className="mb-0 ms-2">{review.userID.firstName} {review.userID.lastName}</h6>
                <div className="ms-2 text-secondary">{review.userID.address.city}, {review.userID.address.state}</div>

              </div>

            </div>
          </Link>

        </div>
      </>
  );
}
export default SellerReviews;