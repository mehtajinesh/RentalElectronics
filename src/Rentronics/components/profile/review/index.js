

const Reviews = ({review}) => {

  return(
      <>
        <div className="mb-4 ri_border border w-100 h-100 ms-0">

          <div className="mt-3 d-flex flex-row ps-3 pb-3 pe-3">
            <div className="col-10">
              <div>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
              </div>
              <h6 className="mb-0 mt-2">{review.item_title}</h6>
              <div className="text-secondary">{review.review_date}</div>
            </div>

            <div className="col-2">
              <div className="align-self-center">
                <img className="pr-rental-pic rounded" alt="" src={review.item_image}/>
              </div>
            </div>
          </div>

          <div className="mt-2 ps-3 pe-3">
            {review.review_body}
          </div>

          <div className="row mt-3 pe-3 ps-3">
            <div className="col-1 col-xl-1 col-lg-1 col-md-2 col-sm-2">
              <img className="pr-profile-pic-small" alt="" src={review.item_seller.seller_image}/>
            </div>

            <div className="mt-1 col-11 col-xl-11 col-lg-11 col-md-10 col-sm-10">
              <h6 className="mb-0 ms-2">{review.item_seller.seller_name}</h6>
              <div className="ms-2 text-secondary">{review.item_seller.seller_city}, {review.item_seller.seller_state}</div>
            </div>

          </div>

        </div>
      </>
  );
}
export default Reviews;