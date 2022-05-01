import Slider from 'react-slick'
import './index.css'
import {useSelector} from "react-redux";
import Skeleton from 'react-loading-skeleton'
import {useNavigate} from "react-router-dom";

const TreadingMultiProductCarousel = ({loading}) => {
    const navigate = useNavigate();
    const items = useSelector(state => state.homeScreen.treadingItems);
    let settings = {
        infinite: false, speed: 1000, arrows: true, slidesToShow: 4, slidesToScroll: 4,

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
            {items && items.map((itemData) => (<div className="p-2" key={itemData._id}>
                <div className="card" onClick={() => {
                    navigate(`/viewItem/${itemData._id}`);
                }}>
                    <img src={itemData.productImages[0]} className="card-img-top p-4"/>
                    <div className="card-body">
                        <div className="fs-5 card-title text-black">{itemData.productName}</div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex flex-column justify-content-between">
                                                    <span className="text-muted my-auto fs-6">{`Seller: `}
                                                        <span onClick={() => {
                                                            navigate(`/profile/${itemData.sellerID._id}`);
                                                        }}>{itemData.sellerID.email}
                                                        </span>
                                                    </span>
                            <div className="text-muted my-auto">{`Posted: ${itemData.postDate}`}</div>
                            <div
                                className="text-muted my-auto fs-6">{`Location: ${itemData.location}`}</div>
                        </div>
                    </div>
                </div>
            </div>))}
        </Slider>}
    </div>);
}

export default TreadingMultiProductCarousel;