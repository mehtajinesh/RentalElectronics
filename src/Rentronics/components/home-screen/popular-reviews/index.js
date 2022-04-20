import itemDataList from "../../data/popular-reviews.json";
import ReviewMultiCarousel from "../review-multi-carousel";

const PopularReviews = () => {
    return (
        <div className="d-flex flex-column p-3">
            <div className="d-flex mb-2 ms-3">
                <h1 className="fs-4 my-auto">Popular Reviews</h1>
                <div className="ps-2 my-auto">
                    <i className="fa-solid fa-star" style={{color: "blue"}}/>
                </div>
            </div>
            <div className="d-flex">
                <ReviewMultiCarousel items={itemDataList}/>
            </div>
        </div>
    );
}
export default PopularReviews;