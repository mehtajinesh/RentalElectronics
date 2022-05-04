import SellerReviews from "./sellerReview";

const ReviewList = ({reviewList}) => {
  const product = reviewList.product;

  return(
      <>
        {reviewList.review.map((review) => (
            <SellerReviews review={review} product={product} key={review._id}/>
        ))}
      </>
  );
}
export default ReviewList;