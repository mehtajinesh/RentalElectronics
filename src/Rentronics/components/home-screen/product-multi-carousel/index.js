import Slider from 'react-slick'
import './index.css'

const MultiProductCarousel = ({items}) => {
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
                                    <div className="card h-100">
                                        <img src={itemData.item_primary_image} className="card-img-top p-4"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{itemData.item_title}</h5>
                                            <p className="card-text">{itemData.item_description}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                <a className="text-muted my-auto"
                                                   href={itemData.item_seller_profile_url}>{itemData.item_seller_name}</a>
                                                <small className="text-muted my-auto">{`Posted: ${itemData.item_post_date}`}</small>
                                                <small
                                                    className="text-muted my-auto">{`Location: ${itemData.item_location}`}</small>
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