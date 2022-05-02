import Slider from 'react-slick'
import './index.css'
import {useSelector} from "react-redux";
import Rating from "react-rating";
import Skeleton from "react-loading-skeleton";
import {useNavigate} from "react-router-dom";

const MultiReviewCarousel = ({loading}) => {
    const navigate = useNavigate();
    const popularReviews = useSelector(state => state.homeScreen.popularReviews);
    let settings = {
        infinite: false, speed: 1000, arrows: true, slidesToShow: 5, slidesToScroll: 4,

        responsive: [{
            breakpoint: 960, settings: {
                slidesToShow: 3, slidesToScroll: 2,
            },
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 2,
            },
        },],
    };
    return (<div className="container">
        {loading && <Skeleton height={260}/>}
        {!loading && <Slider {...settings}>
            {popularReviews.map((itemData) => (<div className="out p-2" key={itemData.reviewID._id}>
                <div className="card text-dark bg-light mb-3">
                    <div className="card-header" onClick={() => {
                        navigate(`/viewItem/${itemData.productID._id}`);
                    }}>{itemData.productID.productName}</div>
                    <div className="card-body">
                        <h5 className="card-title" >{itemData.reviewID.reviewTitle}</h5>
                        <Rating
                            style={{
                                fontSize: `12px`, color: 'gold',
                            }}
                            emptySymbol="far fa-star fa-2x"
                            fullSymbol="fas fa-star fa-2x"
                            initialRating={itemData.reviewID.reviewRating}
                            readonly
                        />
                        <p className="card-text">{itemData.reviewID.reviewDescription}</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-muted my-auto fs-6">{`Reviewer: `}
                            <span onClick={() => {
                                navigate(`/profile/${itemData.userID._id}`);
                            }}>{itemData.userID.email}
                            </span>
                        </span>
                    </div>
                </div>
            </div>))}
        </Slider>}
    </div>);
}

export default MultiReviewCarousel;