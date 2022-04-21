import {useLocation, useNavigate} from "react-router-dom";
import "./index.css"
import {useSelector} from "react-redux";

const ViewItem = () => {
    const location = useLocation()
    let loggedIn = useSelector(state => state.loggedIn);
    let currentUser = useSelector(state => state.currentUser);
    const item = location.state.itemData
    const list_text = item["item_description"].trim().split("\n")
    const features = item["item_properties"]
    const navigate = useNavigate();

    const handleRentNow = () => {
        if (loggedIn) {
            currentUser["cart"] = [...currentUser["cart"], item]
            alert("Item " + item["item_title"] + " added to cart. Navigating to cart")
            navigate('/cart');
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    const handleAddToCart = () => {
        if (loggedIn) {
            currentUser["cart"] = [...currentUser["cart"], item]
            alert("Item " + item["item_title"] + " added to cart.")
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    const handleAddToWishlist = () => {
        if (loggedIn) {
            currentUser["wishlist"] = [...currentUser["wishlist"], item]
            alert("Item " + item["item_title"] + " added to Wishlist.")
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }
    return (<div className="container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div id="carouselProductImages" className="carousel slide p-3" data-bs-ride="carousel">
                        <div className="carousel-indicators text-black">
                            {item["item_images"].map((image, index) => {
                                return (<button type="button" data-bs-target="#carouselProductImages"
                                                data-bs-slide-to={index}
                                                className={`bg-dark ${index === 0 ? "active" : ""}`}/>);
                            })}
                        </div>
                        <div className="carousel-inner">
                            {item["item_images"].map((image, index) => {
                                return (<div className={`carousel-item item ${index === 0 ? "active" : ""}`}>
                                        <img src={image} className="d-block w-100"/>
                                    </div>);
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselProductImages" data-bs-slide="prev">
                            <i className="fas fa-circle-chevron-left fa-2x text-black"/>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselProductImages" data-bs-slide="next">
                            <i className="fas fa-circle-chevron-right fa-2x text-black"/>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="fs-3 fw-bold pt-2">
                        {item["item_title"]}
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Description
                        </div>
                        <ul className="list-group pt-2">
                            {list_text.map((text) => {
                                return (<li className="list-group-item">{text}</li>);
                            })}
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Key Features
                        </div>
                        <div className="container mt-2">
                            <div className="row row-cols-3">
                                {Object.keys(features).map((key) => {
                                    return (<>
                                            <div className="col fw-bold">
                                                {key.toUpperCase()}:
                                            </div>
                                            <div className="col">
                                                {features[key]}
                                            </div>
                                            <div className="col">
                                            </div>
                                        </>)
                                })}
                            </div>

                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Duration
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item">{item["item_rent_duration"]} months</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Price
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item">${item["item_price"]}</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-row p-3 justify-content-around">
                        <btn className="btn text-white bg-success w-25" onClick={handleRentNow}><span
                            className="fas fa-bag-shopping"/> Rent
                            Now
                        </btn>
                        <btn className="btn text-white bg-warning w-25" onClick={handleAddToCart}><span
                            className="fas fa-cart-plus"/> Add to
                            Cart
                        </btn>
                        <btn className="btn text-white bg-danger w-25" onClick={handleAddToWishlist}><span
                            className="fas fa-heart"/> Wishlist
                        </btn>
                    </div>
                </div>
            </div>
        </div>);
}

export default ViewItem;