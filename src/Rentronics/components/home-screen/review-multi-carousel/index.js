import Slider from 'react-slick'
import './index.css'

const MultiReviewCarousel = ({items}) => {
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
    return (
        <div className="container">
            {
                <Slider {...settings}>
                    {
                        items.map((itemData) => (
                                <div className="out p-2" key={itemData.item_id}>
                                    <div className="card text-dark bg-light mb-3">
                                        <div className="card-header">{itemData.item_title}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{itemData.item_review_title}</h5>
                                            <p className="card-text">{itemData.item_review_detail}</p>
                                        </div>
                                        <a className="card-footer bg-transparent"
                                           href={itemData.item_buyer_profile_url}>{itemData.item_buyer_name}</a>
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

export default MultiReviewCarousel;