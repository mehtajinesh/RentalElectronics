import Slider from 'react-slick'
import './index.css'
import {Link} from "react-router-dom";

const MultiProductCarousel = ({items}) => {
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
    return (
        <div className="container">
            {
                <Slider {...settings}>
                    {
                        items.map((itemData) => (
                                <div className="p-2" key={itemData.item_id}>

                                        <div className="card">
                                            <Link to={`/viewItem/${itemData.item_id}`} state={{ itemData }} className="text-decoration-none">
                                                <img src={itemData.item_images[0]} className="card-img-top p-4"/>
                                                <div className="card-body">
                                                    <div className="fs-5 card-title text-black">{itemData.item_title}</div>
                                                </div>
                                            </Link>
                                            <div className="card-footer">
                                                <div className="d-flex flex-column justify-content-between">
                                                    <span className="text-muted my-auto fs-6">Seller: <a href={itemData.item_seller_profile_url}>{itemData.item_seller_name}</a></span>
                                                    <div className="text-muted my-auto">{`Posted: ${itemData.item_post_date}`}</div>
                                                    <div
                                                        className="text-muted my-auto fs-6">{`Location: ${itemData.item_location}`}</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        )
                    }
                </Slider>
            }
        </div>
    );
}

export default MultiProductCarousel;